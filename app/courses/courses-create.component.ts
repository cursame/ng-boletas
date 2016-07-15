import {
    Component
} from '@angular/core';
import {
    ROUTER_DIRECTIVES
} from '@angular/router';

import {
    Course
} from './courses.module';
import {
    School,
    SchoolsService
} from '../schools/schools.module';

@Component({
    directives  : [ ROUTER_DIRECTIVES ],
    providers   : [ SchoolsService ],
    selector    : 'courses-create',
    templateUrl : 'views/courses/create.html'
})
export class CoursesCreateComponent {

    course      : Course    = new Course();

    schools     : School[]  = [];

    constructor( private _schoolsService : SchoolsService ) {
        let query   = {
            page        : 1,
            per_page    : 9999
        };

        this._schoolsService.query( query )
            .then( schools => this.schools = schools );
    }
}