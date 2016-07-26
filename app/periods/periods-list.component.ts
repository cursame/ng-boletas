import {
    Component
} from '@angular/core';
import {
    ROUTER_DIRECTIVES
} from '@angular/router';

@Component({
    directives  : [ ROUTER_DIRECTIVES ],
    selector    : 'periods-list',
    templateUrl : 'views/periods/list.html'
})
export class PeriodsListComponent {}