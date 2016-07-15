import {
    Component
} from '@angular/core';
import {
    ROUTER_DIRECTIVES
} from '@angular/router';

import {
    TranslateService
} from 'ng2-translate/ng2-translate';

import {
    User,
    UsersService
} from './users.module';

declare var swal : any;

@Component({
    directives  : [ ROUTER_DIRECTIVES ],
    providers   : [ UsersService ],
    selector    : 'users-list',
    templateUrl : 'views/users/list.html'
})
export class UsersListComponent {

    users : User[]  = [];

    constructor( private _usersService : UsersService, private _translate : TranslateService ) {
        let query   = {
            expanded    : true
        };

        this._usersService.query( query )
            .then( users => this.users = users );
    }

    public remove( id : string, index : number ) {
        this._usersService.remove( id )
            .then( user => {
                this.users.splice( index, 1 );
                swal( this._translate.instant( 'title.users_removal' ), this._translate.instant( 'message.user_removed' ), 'success' );
            })
            .catch( error => {
                swal( this._translate.instant( 'title.users_removal' ), this._translate.instant( 'message.user_remove_error' ), 'error' );
            });
    }
}