import {
    Component
} from '@angular/core';
import {
    ROUTER_DIRECTIVES
} from '@angular/router';

import {
    TranslateService
} from 'ng2-translate/ng2-translate';

import {
    Period,
    PeriodsService
} from './periods.module';

declare var swal : any;

@Component({
    directives  : [ ROUTER_DIRECTIVES ],
    providers   : [ PeriodsService ],
    selector    : 'periods-list',
    templateUrl : 'views/periods/list.html'
})
export class PeriodsListComponent {

    periods : Period[]  = [];

    constructor( private _periodsService : PeriodsService, private _translate : TranslateService ) {
        let query   = {
            expanded    : true
        };

        this._periodsService.query( query )
            .then( periods => this.periods = periods );
    }

    public remove( id : string, index : number ) {
        this._periodsService.remove( id )
            .then( user => {
                this.periods.splice( index, 1 );
                swal( this._translate.instant( 'title.periods_removal' ), this._translate.instant( 'message.period_removed' ), 'success' );
            })
            .catch( error => {
                swal( this._translate.instant( 'title.periods_removal' ), this._translate.instant( 'message.period_remove_error' ), 'error' );
            });
    }
}