import {
    Component
} from '@angular/core';
import {
    ROUTER_DIRECTIVES
} from '@angular/router';

import {
    Course
} from './courses.module';

@Component({
    directives  : [ ROUTER_DIRECTIVES ],
    selector    : 'courses-create',
    templateUrl : 'views/courses/create.html'
})
export class CoursesCreateComponent {

    course  : Course    = new Course();
}