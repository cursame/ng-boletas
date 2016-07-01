import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    directives  : [ ROUTER_DIRECTIVES ],
    selector    : 'ng-boletas',
    template    : `
        <router-outlet></router-outlet>
    `
})
export class AppComponent {}
