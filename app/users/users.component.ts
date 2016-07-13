import {
        Component
    } from '@angular/core';
import {
        ROUTER_DIRECTIVES
    } from '@angular/router';

@Component({
    directives  : [ ROUTER_DIRECTIVES ],
    selector    : 'users',
    templateUrl : 'views/users/list.html'
})
export class UsersComponent {}