import {
    Component,
    OnInit
} from '@angular/core';
import {
    ROUTER_DIRECTIVES
} from '@angular/router';

import {
    Course,
    CoursesService
} from './courses.module';

@Component({
    directives  : [ ROUTER_DIRECTIVES ],
    providers   : [ CoursesService ],
    selector    : 'courses-list',
    templateUrl : 'views/courses/list.html'
})
export class CoursesListComponent implements OnInit {

    courses     : Course[]  = [];

    constructor( private _service : CoursesService ) {}

    public ngOnInit() {
        let query   = {
            expanded    : true
        };

        this._service.query( query )
            .then( courses => this.courses = courses );
    }
}