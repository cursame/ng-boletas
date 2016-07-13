import {
    Component
} from '@angular/core';
import {
    ROUTER_DIRECTIVES
} from '@angular/router';

import {
    School,
    SchoolsService
} from '../schools/schools.module';
import {
    User
} from './users.module';

@Component({
    directives  : [ ROUTER_DIRECTIVES ],
    providers   : [ SchoolsService ],
    selector    : 'users-create',
    templateUrl : 'views/users/create.html'
})
export class UsersCreateComponent {

    user : User         = new User();

    schools : School[]  = [];

    constructor( private _schoolsService : SchoolsService ) {
        this._schoolsService.query()
            .then( schools => this.schools = schools );
    }

    public create() {
        
    }
}