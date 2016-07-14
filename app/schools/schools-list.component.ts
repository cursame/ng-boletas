import {
    Component
} from '@angular/core';
import {
    ROUTER_DIRECTIVES
} from '@angular/router';

import {
    School,
    SchoolsService
} from './schools.module';

@Component({
    directives  : [ ROUTER_DIRECTIVES ],
    providers   : [ SchoolsService ],
    selector    : 'schools-list',
    templateUrl : 'views/schools/list.html'
})
export class SchoolsListComponent {

    schools : School[]  = [];

    constructor( private _service : SchoolsService ) {
        let query   = {
            page        : 1,
            per_page    : 20
        };

        this._service.query( query )
            .then( schools => this.schools = schools );
    }
}