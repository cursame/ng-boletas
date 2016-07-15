import {
    Component
} from '@angular/core';
import {
    ROUTER_DIRECTIVES
} from '@angular/router';

@Component({
    directives  : [ ROUTER_DIRECTIVES ],
    selector    : 'courses-list',
    templateUrl : 'views/courses/list.html'
})
export class CoursesListComponent {}