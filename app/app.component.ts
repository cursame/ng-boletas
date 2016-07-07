import {
        Component
    } from '@angular/core';
import {
        RouteConfig,
        ROUTER_DIRECTIVES
    } from '@angular/router-deprecated';

import {
        CookieService
    } from 'angular2-cookie/core';
import { 
        TranslateService
    } from 'ng2-translate/ng2-translate';

import {
        DashboardComponent
    } from './dashboard.component';
import {
        LoginComponent
    } from './sessions/login.component';
import {
        SessionsService
    } from './sessions/sessions.module';

@Component({
    directives  : [ ROUTER_DIRECTIVES ],
    providers   : [ CookieService, SessionsService ],
    selector    : 'ng-boletas',
    template    : `
        <router-outlet></router-outlet>
    `
})
@RouteConfig([
    {
        path            : '',
        component       : DashboardComponent,
        useAsDefault    : true,
        name            : 'Dashboard'
    },
    {
        path            : 'login',
        component       : LoginComponent,
        name            : 'Login'
    }
])
export class AppComponent {

    constructor( public translate : TranslateService ) {
        // use navigator lang if available
        var userLang    = navigator.language.split('-')[0];
        userLang        = /(es|en)/gi.test(userLang) ? userLang : 'en';

        translate.use( userLang );
    }
}