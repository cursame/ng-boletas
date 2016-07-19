import {
    Component,
    OnInit
} from '@angular/core';
import {
    ROUTER_DIRECTIVES
} from '@angular/router';

import {
    TranslateService
} from 'ng2-translate/ng2-translate';

import {
    Course,
    CoursesService
} from './courses.module';

declare var swal : any;

@Component({
    directives  : [ ROUTER_DIRECTIVES ],
    providers   : [ CoursesService ],
    selector    : 'courses-list',
    templateUrl : 'views/courses/list.html'
})
export class CoursesListComponent implements OnInit {

    courses     : Course[]  = [];

    constructor( private _service : CoursesService, private _translate : TranslateService ) {}

    public ngOnInit() {
        let query   = {
            expanded    : true
        };

        this._service.query( query )
            .then( courses => this.courses = courses );
    }

    public remove( id : string, index : number ) {
        this._service.remove( id )
            .then( course => {
                this.courses.splice( index, 1 );
                swal( this._translate.instant( 'title.courses_removal' ), this._translate.instant( 'message.course_removed' ), 'success' );
            })
            .catch( error => {
                swal( this._translate.instant( 'title.courses_removal' ), this._translate.instant( 'message.course_remove_error' ), 'error' );
            });
    }
}