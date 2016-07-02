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
        Credentials
    } from './credentials';

@Injectable()
export class SessionsService {

    private sessionsUrl : string;

    constructor( private http : Http, private cookie : CookieService ) {
        this.sessionsUrl    = config.api_url + 'sessions';
    }

    public start( credentials : Credentials ) {
        let headers     = new Headers({
                'Content-Type'  : 'application/json'
            });

        return this.http.post( this.sessionsUrl, JSON.stringify( credentials ), {
                    headers: headers
                }).toPromise()
                .then( res => {
                    this.cookie.putObject( 'session', res.json() );

                    return res.json();
                })
                .catch( this.handleError );
    }

    private handleError( error : any ) {
        return Promise.reject( error.message || error );
    }
}