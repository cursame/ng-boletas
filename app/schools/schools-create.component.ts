import {
    Component
} from '@angular/core';
import {
    ROUTER_DIRECTIVES
} from '@angular/router';

import {
    School
} from './schools.module';

@Component({
    directives  : [ ROUTER_DIRECTIVES ],
    selector    : 'schools-create',
    templateUrl : 'views/schools/create.html'
})
export class SchoolsCreateComponent {

    school : School     = new School();

    public create() {
        
    }
}