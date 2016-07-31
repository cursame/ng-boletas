import {
    Component,
    OnInit
} from '@angular/core';
import {
    ActivatedRoute,
    Router,
    ROUTER_DIRECTIVES
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
    selector    : 'courses-details',
    templateUrl : 'views/courses/create.html'
})
export class CoursesDetailsComponent implements OnInit {

    public updating     : boolean   = true;

    public course       : Course    = new Course();

    private groups      : Group[]   = [];

    private schools     : School[]  = [];

    private teachers    : User[]    = [];

    private _sub        : any;

    constructor( private _service : CoursesService, private _schoolsService : SchoolsService, private _groupsService : GroupsService, private _usersService : UsersService, private _router : Router, private _route : ActivatedRoute, private _translate : TranslateService ) {
        let query   = {
            page        : 1,
            per_page    : 9999
        };

        this._schoolsService.query( query )
            .then( schools => this.schools = schools );
    }

    public create() {
        this._service.update( this.course._id, this.course )
            .then( course => {
                this._router.navigate([ '/courses/list' ]);
                swal( this._translate.instant( 'title.courses_edition' ), this._translate.instant( 'message.course_updated' ), 'success' );
            })
            .catch( error => {
                swal( this._translate.instant( 'title.courses_edition' ), this._translate.instant( 'message.course_update_error' ), 'error' );
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

    public ngOnInit() {
        this._sub   = this._route.params.subscribe( params => {
            this._service.get( params['id'] )
                .then( course => {
                    this.course     = course;
                    this.schoolChanged( course.school );
                })
                .catch( error => {
                    swal( this._translate.instant( 'title.courses_details' ), this._translate.instant( 'message.course_details_error' ), 'error' );
                });
        });
    }
}