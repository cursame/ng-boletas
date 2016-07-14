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
    School,
    SchoolsService
} from '../schools/schools.module';
import {
    User,
    UsersService
} from './users.module';

declare var swal : any;

@Component({
    directives  : [ ROUTER_DIRECTIVES ],
    providers   : [ SchoolsService, UsersService ],
    selector    : 'users-create',
    templateUrl : 'views/users/create.html'
})
export class UsersCreateComponent {

    user : User         = new User();

    schools : School[]  = [];

    constructor( private _router : Router, private _schoolsService : SchoolsService, private _users : UsersService, private _translate : TranslateService ) {
        this._schoolsService.query()
            .then( schools => this.schools = schools );
    }

    public create() {
        this._users.create( this.user )
            .then( user => {
                this._router.navigate([ '/users/list' ]);
                swal( this._translate.instant( 'title.users_creation' ), this._translate.instant( 'message.user_created' ), 'success' );
            })
            .catch( error => {
                swal( this._translate.instant( 'title.users_creation' ), this._translate.instant( 'message.user_create_error' ), 'error' );
            });
    }
}