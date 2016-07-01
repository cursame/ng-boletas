import { provideRouter, RouterConfig }  from '@angular/router';

import { LoginComponent } from './login.component';

const routes : RouterConfig = [
    {
        path        : '',
        redirectTo  : '/login',
        terminal    : true
    },
    {
        path        : 'login',
        component   : LoginComponent
    }
];

export const SESSIONS_ROUTER_PROVIDER = [
    provideRouter( routes )
];
