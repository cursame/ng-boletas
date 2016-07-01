import { bootstrap } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';

import { SESSIONS_ROUTER_PROVIDER } from './sessions/sessions.routes';

bootstrap( AppComponent, [
        SESSIONS_ROUTER_PROVIDER
    ]);
