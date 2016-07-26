import {
    Component,
    OnInit
} from '@angular/core';
import {
    Router,
    ROUTER_DIRECTIVES
} from '@angular/router';

import {
    TranslateService
} from 'ng2-translate/ng2-translate';

import {
    Group,
    GroupsService
} from '../groups/groups.module';
import {
    Period,
    PeriodsService
} from './periods.module';
import {
    School,
    SchoolsService
} from '../schools/schools.module';

declare var $ : any;
declare var swal : any;

@Component({
    directives  : [ ROUTER_DIRECTIVES ],
    providers   : [ GroupsService, PeriodsService, SchoolsService ],
    selector    : 'periods-create',
    templateUrl : 'views/periods/create.html'
})
export class PeriodsCreateComponent implements OnInit {

    period : Period     = new Period();

    groups : Group[]    = [];

    schools : School[]  = [];

    constructor( private _router : Router, private _periods : PeriodsService, private _groupsService : GroupsService, private _schoolsService : SchoolsService, private _translate : TranslateService ) {
        let query   = {
            page        : 1,
            per_page    : 9999
        };

        this._schoolsService.query( query )
            .then( schools => this.schools = schools );
    }

    public create() {
        this._periods.create( this.period )
            .then( period => {
                this._router.navigate([ '/periods/list' ]);
                swal( this._translate.instant( 'title.periods_creation' ), this._translate.instant( 'message.period_created' ), 'success' );
            })
            .catch( error => {
                swal( this._translate.instant( 'title.periods_creation' ), this._translate.instant( 'message.period_create_error' ), 'error' );
            });
    }

    public ngOnInit() {
        let that    = this;
        $( '.datepicker' ).datepicker({
                format  : 'dd/mm/yyyy'
            }).on( 'changeDate', function ( e ) {
                that.period.due_date    = e.date;
            });
    }

    public schoolChanged( school ) {
        let query   = {
            page        : 1,
            per_page    : 9999,
            school      : school,
            type        : 2
        };

        this._groupsService.query( query )
            .then( groups => this.groups = groups );
    }
}