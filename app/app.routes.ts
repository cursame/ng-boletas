import {
        provideRouter,
        RouterConfig
    }  from '@angular/router';

import {
        DashboardComponent
    } from './dashboard.component';
import {
        LoginComponent
    } from './sessions/login.component';

const routes : RouterConfig = [
    {
        path        : '',
        component   : DashboardComponent
    },
    {
        path        : 'login',
        component   : LoginComponent
    }
];

export const APP_ROUTER_PROVIDER = [
    provideRouter( routes )
];