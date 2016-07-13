import {
        provideRouter,
        RouterConfig
    } from '@angular/router';

import {
        DashboardComponent
    } from './dashboard.component';
import {
        LoginComponent
    } from './sessions/sessions.module';
import {
        UsersListComponent
    } from './users/users.module';

const routes : RouterConfig = [
    {
        path        : '',
        component   : DashboardComponent,
        children    : [
            {
                path        : ''
            },
            {
                path        : 'users/list',
                component   : UsersListComponent
            }
        ]
    },
    {
        path        : 'login',
        component   : LoginComponent
    }
];

export const APP_ROUTES     = [
    provideRouter( routes, { enableTracing : true })
];