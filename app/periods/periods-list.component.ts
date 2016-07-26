import {
    Component
} from '@angular/core';
import {
    ROUTER_DIRECTIVES
} from '@angular/router';

import {
    Period,
    PeriodsService
} from './periods.module';

@Component({
    directives  : [ ROUTER_DIRECTIVES ],
    providers   : [ PeriodsService ],
    selector    : 'periods-list',
    templateUrl : 'views/periods/list.html'
})
export class PeriodsListComponent {

    periods : Period[]  = [];

    constructor( private _periodsService : PeriodsService ) {
        let query   = {
            expanded    : true
        };

        this._periodsService.query( query )
            .then( periods => this.periods = periods );
    }
}