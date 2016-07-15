import {
    Component
} from '@angular/core';
import {
    ROUTER_DIRECTIVES
} from '@angular/router';

import {
    Group
} from './groups.module';

@Component({
    directives  : [ ROUTER_DIRECTIVES ],
    selector    : 'groups-create',
    templateUrl : 'views/groups/create.html'
})
export class GroupsCreateComponent {

    group : Group   = new Group();
}