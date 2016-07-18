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
import {
    User,
    UsersService
} from '../users/users.module';

@Component({
    directives  : [ ROUTER_DIRECTIVES ],
    providers   : [ GroupsService, SchoolsService, UsersService ],
    selector    : 'courses-create',
    templateUrl : 'views/courses/create.html'
})
export class CoursesCreateComponent {

    course      : Course    = new Course();

    groups      : Group[]   = [];

    schools     : School[]  = [];

    students    : User[]    = [];

    constructor( private _schoolsService : SchoolsService, private _groupsService : GroupsService, private _usersService : UsersService ) {
        let query   = {
            page        : 1,
            per_page    : 9999
        };

        this._schoolsService.query( query )
            .then( schools => this.schools = schools );
    }

    public schoolChanged( school ) {
        let groupsQuery     = {
            page        : 1,
            per_page    : 9999,
            school      : school,
            select      : 'name'
        };

        let studentsQuery   = {
            page        : 1,
            per_page    : 9999,
            school      : school,
            select      : 'name',
            type        : 4
        };

        this._groupsService.query( groupsQuery )
            .then( groups => this.groups = groups );

        this._usersService.query( studentsQuery )
            .then( students => this.students = students );
    }
}