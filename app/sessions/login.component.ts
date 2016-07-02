import {
        Component
    } from '@angular/core';
import {
        Router
    } from '@angular/router';

import {
        TranslateService
    } from 'ng2-translate/ng2-translate';

import {
        Credentials
    } from './credentials';
import {
        SessionsService
    } from './sessions.service';

declare var swal : any;

@Component({
    selector    : 'user-login',
    templateUrl : 'views/sessions/login.html'
})
export class LoginComponent {

    credentials : Credentials   = new Credentials();

    constructor( private _router : Router, private _session : SessionsService, private _translate : TranslateService ) {}

    public login() {
        this._session.start( this.credentials )
            .then( data => {
                this._router.navigate([ '/dashboard' ]);
            })
            .catch( error => {
                swal( this._translate.instant( 'title.login_error' ), this._translate.instant( 'message.login_error' ), 'error' );
            });
    }
}