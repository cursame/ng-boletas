import {
        Component
    } from '@angular/core';
import {
        ROUTER_DIRECTIVES
    } from '@angular/router';

@Component({
    directives  : [ ROUTER_DIRECTIVES ],
    selector    : 'users',
    template    : '<h1>Users</h1>'
})
export class UsersComponent {}