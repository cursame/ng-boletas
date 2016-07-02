import {
        Component
    } from '@angular/core';
import {
        ROUTER_DIRECTIVES
    } from '@angular/router';

import {
        CookieService
    } from 'angular2-cookie/core';
import { 
        TranslateService
    } from 'ng2-translate/ng2-translate';

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
export class AppComponent {

    constructor( public translate : TranslateService ) {
        // use navigator lang if available
        var userLang    = navigator.language.split('-')[0];
        userLang        = /(es|en)/gi.test(userLang) ? userLang : 'en';

        translate.use( userLang );
    }
}