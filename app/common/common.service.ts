import 'rxjs/add/operator/toPromise';

import {
    Injectable
} from '@angular/core';
import {
    Http,
    Headers,
    URLSearchParams
} from '@angular/http';

import {
        config
    } from '../config';
import {
    SessionsService
} from '../sessions/sessions.module';

@Injectable()
export class CommonService {

    protected _http             : Http;

    protected _session          : string;

    protected _sessionService   : SessionsService;

    protected url               : string;

    constructor() {}

    protected _init( serviceUrl : string ) {
        this.url        = config.api_url + serviceUrl;
        this._session   = this._sessionService.getToken();
    }

    public create( data : any ) {
        data.session    = this._session;

        return this._http.post( this.url, JSON.stringify( data ), {
                headers : new Headers({
                    'Content-Type'  : 'application/json'
                })
            })
            .toPromise()
            .then( res => {
                return res.json();
            })
            .catch( this.handleError );
    }

    public get( id : string, expanded : boolean ) {
        let params: URLSearchParams    = new URLSearchParams();
        params.set( 'session', this._session );

        if ( expanded ) {
            params.set( 'expanded', 'true' );
        }

        return this._http.get( `${ this.url }/${ id }`, {
                search  : params,
                headers : new Headers({
                    'Content-Type'  : 'application/json'
                })
            })
            .toPromise()
            .then( res => {
                return res.json();
            })
            .catch( this.handleError );
    }

    public query( q : any ) {
         let params: URLSearchParams    = new URLSearchParams();
         params.set( 'session', this._session );

         for ( let key in q ) {
            params.set( key, q[key] );
         }

        return this._http.get( this.url, {
                search  : params,
                headers : new Headers({
                    'Content-Type'  : 'application/json'
                })
            })
            .toPromise()
            .then( res => {
                let response    = res.json();

                return response.results;
            })
            .catch( this.handleError );
    }

    public remove( id : string ) {
        let params : any    = {
            session     : this._session
        };

        return this._http.delete( this.url + '/' + id, {
                body    : params,
                headers : new Headers({
                    'Content-Type'  : 'application/json'
                })
            })
            .toPromise()
            .catch( this.handleError );
    }

    private handleError( error : any ) {
        return Promise.reject( error.message || error );
    }
}