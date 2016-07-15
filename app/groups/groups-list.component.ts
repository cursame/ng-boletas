import {
    Component
} from '@angular/core';
import {
    ROUTER_DIRECTIVES
} from '@angular/router';

import {
    Group,
    GroupsService
} from './groups.module';

@Component({
    directives  : [ ROUTER_DIRECTIVES ],
    providers   : [ GroupsService ],
    selector    : 'groups-list',
    templateUrl : 'views/groups/list.html'
})
export class GroupsListComponent {

    groups  : Group[]   = [];

    constructor( private _service : GroupsService ) {
        let query   = {
            expanded    : true
        };

        this._service.query( query )
            .then( groups => this.groups = groups );
    }
}