import {
        Component
    } from '@angular/core';

import {
    TranslateService
    } from 'ng2-translate/ng2-translate';

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

    credentials : Credentials   = new Credentials();

    constructor( private sessions : SessionsService, private translate : TranslateService ) {}

    login() {
        this.sessions.start( this.credentials )
            .then( data => {
                
            })
            .catch( error => {
                swal( this.translate.instant( 'title.login_error' ), this.translate.instant( 'message.login_error' ), 'error' );
            });
    }
}