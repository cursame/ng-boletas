import {
    Component,
    Input
} from '@angular/core';

import {
    Feature
} from './schools.module';

@Component({
    selector    : 'features',
    templateUrl : 'views/schools/features.html'
})
export class SchoolsFeaturesComponent {

    @Input() features : Feature[];

    public addFeature() {
        this.features.push( new Feature() );
    }

    public removeFeature() {
        this.features.pop();
    }
}