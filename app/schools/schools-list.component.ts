import {
    Component
} from '@angular/core';
import {
    ROUTER_DIRECTIVES
} from '@angular/router';

import {
    TranslateService
} from 'ng2-translate/ng2-translate';

import {
    School,
    SchoolsService
} from './schools.module';

declare var swal : any;

@Component({
    directives  : [ ROUTER_DIRECTIVES ],
    providers   : [ SchoolsService ],
    selector    : 'schools-list',
    templateUrl : 'views/schools/list.html'
})
export class SchoolsListComponent {

    schools : School[]  = [];

    constructor( private _service : SchoolsService, private _translate : TranslateService ) {
        let query   = {
            page        : 1,
            per_page    : 20
        };

        this._service.query( query )
            .then( schools => this.schools = schools );
    }

    public remove( id : string, index : number ) {
        this._service.remove( id )
            .then( school => {
                this.schools.splice( index, 1 );
                swal( this._translate.instant( 'title.schools_removal' ), this._translate.instant( 'message.school_removed' ), 'success' );
            })
            .catch( error => {
                swal( this._translate.instant( 'title.schools_removal' ), this._translate.instant( 'message.school_remove_error' ), 'error' );
            });
    }
}