import {
        Component
    } from '@angular/core';

import {
        Credentials
    } from './credentials';
import {
        SessionsService
    } from './sessions.service';

@Component({
    selector    : 'user-login',
    templateUrl : 'views/sessions/login.html',
    providers   : [
        SessionsService
    ]
})
export class LoginComponent {

    credentials = new Credentials();

    constructor( private sessions : SessionsService ) {}

    login() {
        this.sessions.start( this.credentials )
            .then( data => {
                console.log( data );
            })
            .catch( error => {
                console.log( error );
            });
    }
}