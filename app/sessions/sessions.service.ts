import 'rxjs/add/operator/toPromise';

import {
        Injectable
    } from '@angular/core';
import {
        Http,
        Headers
    } from '@angular/http';

import {
        CookieService
    } from 'angular2-cookie/core';

import {
        config
    } from '../config';
import {
        Credentials,
        Session
    } from './sessions.module';

@Injectable()
export class SessionsService {

    private sessionsUrl : string;

    constructor( private http : Http, private cookie : CookieService ) {
        this.sessionsUrl    = config.api_url + 'sessions';
    }

    public getToken() {
        let session = <Session>this.cookie.getObject( 'session' );
        return session ? session.token : null;
    }

    public isLoggedIn() {
        return <Session>this.cookie.getObject( 'session' ) ? true : false;
    }

    public start( credentials : Credentials ) {
        let headers     = new Headers({
                'Content-Type'  : 'application/json'
            });

        return this.http.post( this.sessionsUrl, JSON.stringify( credentials ), {
                    headers: headers
                }).toPromise()
                .then( res => {
                    let data    = res.json();
                    let session = new Session( data.token, data.user_id, data.school, data.access_level );

                    this.cookie.putObject( 'session', session );

                    return session;
                })
                .catch( this.handleError );
    }

    public terminate( token : string ) {
        let headers     = new Headers({
                'Content-Type'  : 'application/json'
            });
        let url         = `${ this.sessionsUrl }/${ token }`;

        return this.http.delete( url, {
                    headers: headers
                }).toPromise()
                .then( res => {
                    this.cookie.remove( 'session' );

                    return res.json();
                })
                .catch( this.handleError );
    }

    private handleError( error : any ) {
        return Promise.reject( error.message || error );
    }
}