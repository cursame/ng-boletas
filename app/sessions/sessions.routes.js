"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login.component');
var routes = [
    {
        path: '',
        redirectTo: '/login',
        terminal: true
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    }
];
exports.SESSIONS_ROUTER_PROVIDER = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=sessions.routes.js.map