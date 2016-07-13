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

    public query() {
         let params: URLSearchParams    = new URLSearchParams();
         params.set( 'session', this._session );

        return this._http.get( this.url, {
                search  : params,
                headers : new Headers({
                    'Content-Type'  : 'application/json'
                })
            }).toPromise()
            .then( res => {
                let response    = res.json();

                return response.results;
            })
            .catch( this.handleError );
    }

    private handleError( error : any ) {
        return Promise.reject( error.message || error );
    }
}