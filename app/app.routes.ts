import {
    provideRouter,
    RouterConfig
} from '@angular/router';

import {
    CoursesCreateComponent,
    CoursesListComponent
} from './courses/courses.module';
import {
    DashboardComponent
} from './dashboard.component';
import {
    GroupsListComponent,
    GroupsCreateComponent
} from './groups/groups.module';
import {
    LoginComponent
} from './sessions/sessions.module';
import {
    PeriodsListComponent,
    PeriodsCreateComponent
} from './periods/periods.module';
import {
    SchoolsCreateComponent,
    SchoolsDetailsComponent,
    SchoolsListComponent
} from './schools/schools.module';
import {
    UsersCreateComponent,
    UsersListComponent
} from './users/users.module';

const routes : RouterConfig = [
    {
        path        : '',
        component   : DashboardComponent,
        children    : [
            {
                path        : ''
            },
            {
                path        : 'courses/list',
                component   : CoursesListComponent
            },
            {
                path        : 'courses/create',
                component   : CoursesCreateComponent
            },
            {
                path        : 'groups/list',
                component   : GroupsListComponent
            },
            {
                path        : 'groups/create',
                component   : GroupsCreateComponent
            },
            {
                path        : 'periods/list',
                component   : PeriodsListComponent
            },
            {
                path        : 'periods/create',
                component   : PeriodsCreateComponent
            },
            {
                path        : 'schools/list',
                component   : SchoolsListComponent
            },
            {
                path        : 'schools/create',
                component   : SchoolsCreateComponent
            },
            {
                path        : 'schools/details/:id',
                component   : SchoolsDetailsComponent
            },
            {
                path        : 'users/list',
                component   : UsersListComponent
            },
            {
                path        : 'users/create',
                component   : UsersCreateComponent
            }
        ]
    },
    {
        path        : 'login',
        component   : LoginComponent
    }
];

export const APP_ROUTES     = [
    provideRouter( routes, { enableTracing : false })
];