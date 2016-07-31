import {
    Component
} from '@angular/core';
import {
    Router,
    ROUTER_DIRECTIVES
} from '@angular/router';

import {
    TranslateService
} from 'ng2-translate/ng2-translate';

import {
    School,
    SchoolsService,
    SchoolsFeaturesComponent
} from './schools.module';

declare var swal : any;

@Component({
    directives  : [ ROUTER_DIRECTIVES, SchoolsFeaturesComponent ],
    providers   : [ SchoolsService ],
    selector    : 'schools-create',
    templateUrl : 'views/schools/create.html'
})
export class SchoolsCreateComponent {

    school : School     = new School();

    constructor( private _router : Router, private _schools : SchoolsService, private _translate : TranslateService ) {}

    public create() {
        this._schools.create( this.school )
            .then( school => {
                this._router.navigate([ '/schools/list' ]);
                swal( this._translate.instant( 'title.schools_creation' ), this._translate.instant( 'message.school_created' ), 'success' );
            })
            .catch( error => {
                swal( this._translate.instant( 'title.schools_creation' ), this._translate.instant( 'message.school_create_error' ), 'error' );
            });
    }
}