import {
    Settings
} from './schools.module';

export class School {

    constructor( public _id : string = '', public name : string = '', public settings : Settings = new Settings() ) {}
}