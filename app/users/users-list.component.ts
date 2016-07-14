import {
    Component
} from '@angular/core';
import {
    ROUTER_DIRECTIVES
} from '@angular/router';

import {
    User,
    UsersService
} from './users.module';

@Component({
    directives  : [ ROUTER_DIRECTIVES ],
    providers   : [ UsersService ],
    selector    : 'users-list',
    templateUrl : 'views/users/list.html'
})
export class UsersListComponent {

    users : User[]  = [];

    constructor( private _usersService : UsersService ) {
        let query   = {
            expanded    : true
        };

        this._usersService.query( query )
            .then( users => this.users = users );
    }
}