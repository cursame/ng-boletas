import {
    Component,
    OnInit
} from '@angular/core';
import {
    ActivatedRoute,
    Router,
    ROUTER_DIRECTIVES
} from '@angular/router';

import {
    TranslateService
} from 'ng2-translate/ng2-translate';

import {
    School,
    SchoolsService
} from './schools.module';

declare var swal : any;

@Component({
    directives  : [ ROUTER_DIRECTIVES ],
    providers   : [ SchoolsService ],
    selector    : 'schools-details',
    templateUrl : 'views/schools/create.html'
})
export class SchoolsDetailsComponent implements OnInit {

    public updating : Boolean   = true;

    public school   : School      = new School();

    private _sub    : any;

    constructor( private _router : Router, private _route : ActivatedRoute, private _schools : SchoolsService, private _translate : TranslateService ) {}

    public ngOnInit() {
        this._sub   = this._route.params.subscribe( params => {
            this._schools.get( params['id'], true )
                .then( school => {
                    this.school     = school;
                })
                .catch( error => {
                    swal( this._translate.instant( 'title.schools_details' ), this._translate.instant( 'message.school_details_error' ), 'error' );
                });
        });
    }
}