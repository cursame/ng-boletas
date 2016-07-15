import {
    Component
} from '@angular/core';
import {
    ROUTER_DIRECTIVES
} from '@angular/router';

@Component({
    directives  : [ ROUTER_DIRECTIVES ],
    selector    : 'groups-list',
    templateUrl : 'views/groups/list.html'
})
export class GroupsListComponent {}