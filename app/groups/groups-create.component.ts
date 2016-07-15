import {
    Component
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
} from './groups.module';
import {
    School,
    SchoolsService
} from '../schools/schools.module';
import {
    User,
    UsersService
} from '../users/users.module';

declare var swal : any;

@Component({
    directives  : [ ROUTER_DIRECTIVES ],
    providers   : [ GroupsService, SchoolsService, UsersService ],
    selector    : 'groups-create',
    templateUrl : 'views/groups/create.html'
})
export class GroupsCreateComponent {

    group   : Group     = new Group();

    schools : School[]  = [];

    users   : User[]    = [];

    constructor( private _router : Router, private _service : GroupsService, private _schoolsService : SchoolsService, private _usersService : UsersService, private _translate : TranslateService ) {
        let query   = {
            page        : 1,
            per_page    : 9999
        };

        this._schoolsService.query( query )
            .then( schools => this.schools = schools );
    }

    public create() {
        this._service.create( this.group )
            .then( group => {
                this._router.navigate([ '/groups/list' ]);
                swal( this._translate.instant( 'title.groups_creation' ), this._translate.instant( 'message.group_created' ), 'success' );
            })
            .catch( error => {
                swal( this._translate.instant( 'title.groups_creation' ), this._translate.instant( 'message.group_create_error' ), 'error' );
            });
    }

    public schoolChanged( school ) {
        let query   = {
            page        : 1,
            per_page    : 9999,
            school      : school,
            type        : 2
        };

        this._usersService.query( query )
            .then( users => this.users = users );
    }
}