import {
    Injectable
} from '@angular/core';
import {
    Http
} from '@angular/http';

import {
    CommonService
} from '../common/common.module';
import {
    SessionsService
} from '../sessions/sessions.module';

@Injectable()
export class UsersService extends CommonService {

    constructor( protected _http : Http, protected _sessionService : SessionsService ) {
        super();
        this._init( 'users' );
    }
}