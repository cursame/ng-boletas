import {
        provideRouter
    } from '@angular/router';

import {
        DashboardComponent
    } from './dashboard.component';
import {
        LoginComponent
    } from './sessions/sessions.module';

const routes : RouterConfig = [
    {
        path        : 'dashboard',
        component   : DashboardComponent
    },
    {
        path        : 'login',
        component   : LoginComponent
    },
    {
        path        : '',
        redirectTo  : 'dashboard',
        terminal    : true
    }
];

export const APP_ROUTES     = [
    provideRouter( routes, { enableTracing : true })
];