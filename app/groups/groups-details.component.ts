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
    Group,
    GroupsService
} from './groups.module';
import {
    School,
    SchoolsService
} from '../schools/schools.module';
import {
    User,
    UsersService
} from '../users/users.module';

declare var $    : any;
declare var swal : any;

@Component({
    directives  : [ ROUTER_DIRECTIVES ],
    providers   : [ GroupsService, SchoolsService, UsersService ],
    selector    : 'groups-details',
    templateUrl : 'views/groups/create.html'
})
export class GroupsDetailsComponent implements OnInit {

    private updating    : boolean   = true;

    private group       : Group     = new Group();

    private schools     : School[]  = [];

    private students    : User[]    = [];

    private users       : User[]    = [];

    private _sub        : any;

    constructor( private _router : Router, private _route : ActivatedRoute, private _service : GroupsService, private _schoolsService : SchoolsService, private _usersService : UsersService, private _translate : TranslateService ) {
        let query   = {
            page        : 1,
            per_page    : 9999
        };

        this._schoolsService.query( query )
            .then( schools => this.schools = schools );
    }

    public create() {
        this._service.update( this.group._id, this.group )
            .then( group => {
                this._router.navigate([ '/groups/list' ]);
                swal( this._translate.instant( 'title.groups_edition' ), this._translate.instant( 'message.group_updated' ), 'success' );
            })
            .catch( error => {
                swal( this._translate.instant( 'title.groups_edition' ), this._translate.instant( 'message.group_update_error' ), 'error' );
            });
    }

    public schoolChanged( school ) {
        let adminQuery      = {
            page        : 1,
            per_page    : 9999,
            school      : school,
            type        : 2
        };

        let studentsQuery   = {
            page        : 1,
            per_page    : 9999,
            school      : school,
            select      : 'name',
            type        : 4
        };

        this._usersService.query( adminQuery )
            .then( users => this.users = users );

        this._usersService.query( studentsQuery )
            .then( students => {
                let that        = this;
                this.students   = students;

                setTimeout( function () {
                    if ( that.group && that.group.students.length > 0 ) {
                        for ( let i = 0; i < that.group.students.length; i++ ) {
                            $( `select[name="students"] option[value="${ that.group.students[i] }"]` ).attr( 'selected', true );
                        }
                    }
                }, 0 );
            });
    }

    public studentsChanged( students ) {
        this.group.students = Array.apply( null, students )
            .filter( option => option.selected )
            .map( option => option.value );
    }

    public ngOnInit() {
        this._sub   = this._route.params.subscribe( params => {
            this._service.get( params['id'] )
                .then( group => {
                    this.group     = group;
                    this.schoolChanged( group.school );
                })
                .catch( error => {
                    swal( this._translate.instant( 'title.groups_details' ), this._translate.instant( 'message.group_details_error' ), 'error' );
                });
        });
    }
}