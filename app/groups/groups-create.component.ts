import {
    Component
} from '@angular/core';
import {
    ROUTER_DIRECTIVES
} from '@angular/router';

import {
    Group
} from './groups.module';
import {
    School,
    SchoolsService
} from '../schools/schools.module';

@Component({
    directives  : [ ROUTER_DIRECTIVES ],
    providers   : [ SchoolsService ],
    selector    : 'groups-create',
    templateUrl : 'views/groups/create.html'
})
export class GroupsCreateComponent {

    group   : Group     = new Group();

    schools : School[]  = [];

    constructor( private _schoolsService : SchoolsService ) {
        let query   = {
            page        : 1,
            per_page    : 9999
        };

        this._schoolsService.query( query )
            .then( schools => this.schools = schools );
    }
}