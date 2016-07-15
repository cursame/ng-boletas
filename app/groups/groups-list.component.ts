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
    Group,
    GroupsService
} from './groups.module';

declare var swal : any;

@Component({
    directives  : [ ROUTER_DIRECTIVES ],
    providers   : [ GroupsService ],
    selector    : 'groups-list',
    templateUrl : 'views/groups/list.html'
})
export class GroupsListComponent {

    groups  : Group[]   = [];

    constructor( private _service : GroupsService, private _translate : TranslateService ) {
        let query   = {
            expanded    : true
        };

        this._service.query( query )
            .then( groups => this.groups = groups );
    }

    public remove( id : string, index : number ) {
        this._service.remove( id )
            .then( group => {
                this.groups.splice( index, 1 );
                swal( this._translate.instant( 'title.groups_removal' ), this._translate.instant( 'message.group_removed' ), 'success' );
            })
            .catch( error => {
                swal( this._translate.instant( 'title.groups_removal' ), this._translate.instant( 'message.group_remove_error' ), 'error' );
            });
    }
}