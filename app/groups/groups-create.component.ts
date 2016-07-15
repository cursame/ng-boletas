import {
    Component
} from '@angular/core';
import {
    ROUTER_DIRECTIVES
} from '@angular/router';

import {
    Group
} from './groups.module';
import {
    School,
    SchoolsService
} from '../schools/schools.module';
import {
    User,
    UsersService
} from '../users/users.module';

@Component({
    directives  : [ ROUTER_DIRECTIVES ],
    providers   : [ SchoolsService, UsersService ],
    selector    : 'groups-create',
    templateUrl : 'views/groups/create.html'
})
export class GroupsCreateComponent {

    group   : Group     = new Group();

    schools : School[]  = [];

    users   : User[]    = [];

    constructor( private _schoolsService : SchoolsService, private _usersService : UsersService ) {
        let query   = {
            page        : 1,
            per_page    : 9999
        };

        this._schoolsService.query( query )
            .then( schools => this.schools = schools );
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