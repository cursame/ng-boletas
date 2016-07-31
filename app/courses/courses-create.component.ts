import {
    Component
} from '@angular/core';
import {
    ROUTER_DIRECTIVES,
    Router
} from '@angular/router';

import {
    TranslateService
} from 'ng2-translate/ng2-translate';

import {
    Course,
    CoursesService
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

declare var swal : any;

@Component({
    directives  : [ ROUTER_DIRECTIVES ],
    providers   : [ CoursesService, GroupsService, SchoolsService, UsersService ],
    selector    : 'courses-create',
    templateUrl : 'views/courses/create.html'
})
export class CoursesCreateComponent {

    course      : Course    = new Course();

    groups      : Group[]   = [];

    schools     : School[]  = [];

    teachers    : User[]    = [];

    constructor( private _service : CoursesService, private _schoolsService : SchoolsService, private _groupsService : GroupsService, private _usersService : UsersService, private _router : Router, private _translate : TranslateService ) {
        let query   = {
            page        : 1,
            per_page    : 9999
        };

        this._schoolsService.query( query )
            .then( schools => this.schools = schools );
    }

    public create() {
        this._service.create( this.course )
            .then( course => {
                this._router.navigate([ '/courses/list' ]);
                swal( this._translate.instant( 'title.courses_creation' ), this._translate.instant( 'message.course_created' ), 'success' );
            })
            .catch( error => {
                swal( this._translate.instant( 'title.courses_creation' ), this._translate.instant( 'message.course_create_error' ), 'error' );
            });
    }

    public schoolChanged( school ) {
        let groupsQuery     = {
            page        : 1,
            per_page    : 9999,
            school      : school,
            select      : 'name'
        };

        let teachersQuery   = {
            page        : 1,
            per_page    : 9999,
            school      : school,
            select      : 'name',
            type        : 3
        };

        this._groupsService.query( groupsQuery )
            .then( groups => this.groups = groups );

        this._usersService.query( teachersQuery )
            .then( teachers => this.teachers = teachers );
    }
}