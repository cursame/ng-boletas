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
        ROUTER_PROVIDERS
    } from '@angular/router-deprecated';

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

bootstrap( AppComponent, [
        disableDeprecatedForms(),
        provideForms(),
        HTTP_PROVIDERS,
        ROUTER_PROVIDERS,
        TRANSLATE_PROVIDERS,
        {
            provide     : PLATFORM_PIPES,
            useValue    : [ TranslatePipe ],
            multi       : true
        }
    ]);