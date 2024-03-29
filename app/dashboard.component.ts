import {
        Component
    } from '@angular/core';
import {
        Router,
        ROUTER_DIRECTIVES
    } from '@angular/router';

import {
        TranslateService
    } from 'ng2-translate/ng2-translate';

import {
        SessionsService
    } from './sessions/sessions.module';

declare var swal : any;

@Component({
    directives  : [ ROUTER_DIRECTIVES ],
    selector    : 'dashboard',
    templateUrl : 'views/dashboard.html'
})
export class DashboardComponent {

    constructor( private _router : Router, private _session : SessionsService, private _translate : TranslateService ) {}

    public logout( $event ) {
        $event.preventDefault();

        this._session.terminate( this._session.getToken() )
            .then( data => {
                this._router.navigate([ '/login' ]);
            })
            .catch( error => {
                swal( this._translate.instant( 'title.login_error' ), this._translate.instant( 'message.login_error' ), 'error' );
            });
    }

    public ngOnInit() {
        if ( !this._session.isLoggedIn() ) {
            this._router.navigate([ '/login' ]);
        }
    }
}