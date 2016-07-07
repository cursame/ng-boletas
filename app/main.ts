import { 
        PLATFORM_PIPES
    } from '@angular/core';
import {
        HTTP_PROVIDERS
    } from '@angular/http';
import { 
        disableDeprecatedForms,
        provideForms
    } from '@angular/forms';

import {
        bootstrap
    } from '@angular/platform-browser-dynamic';

import {
        TranslatePipe,
        TRANSLATE_PROVIDERS
    } from 'ng2-translate/ng2-translate';

import {
        AppComponent
    } from './app.component';
import {
        APP_ROUTES
    } from './app.routes';

bootstrap( AppComponent, [
        disableDeprecatedForms(),
        provideForms(),
        APP_ROUTES,
        HTTP_PROVIDERS,
        TRANSLATE_PROVIDERS,
        {
            provide     : PLATFORM_PIPES,
            useValue    : [ TranslatePipe ],
            multi       : true
        }
    ]);