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
    Group,
    GroupsService
} from '../groups/groups.module';
import {
    School,
    SchoolsService
} from '../schools/schools.module';

@Component({
    directives  : [ ROUTER_DIRECTIVES ],
    providers   : [ GroupsService, SchoolsService ],
    selector    : 'courses-create',
    templateUrl : 'views/courses/create.html'
})
export class CoursesCreateComponent {

    course      : Course    = new Course();

    groups      : Group[]   = [];

    schools     : School[]  = [];

    constructor( private _schoolsService : SchoolsService, private _groupsService : GroupsService ) {
        let query   = {
            page        : 1,
            per_page    : 9999
        };

        this._schoolsService.query( query )
            .then( schools => this.schools = schools );
    }

    public schoolChanged( school ) {
        let groupsQuery = {
            page        : 1,
            per_page    : 9999,
            school      : school,
            select      : 'name'
        };

        this._groupsService.query( groupsQuery )
            .then( groups => this.groups = groups );
    }
}