import {
    Component
} from '@angular/core';
import {
    ROUTER_DIRECTIVES
} from '@angular/router';

import {
    User
} from './users.module';

@Component({
    directives  : [ ROUTER_DIRECTIVES ],
    selector    : 'users-create',
    templateUrl : 'views/users/create.html'
})
export class UsersCreateComponent {

    user : User     = new User();

    public create() {
        
    }
}