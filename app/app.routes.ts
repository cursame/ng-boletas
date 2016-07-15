import {
    provideRouter,
    RouterConfig
} from '@angular/router';

import {
    CoursesListComponent
} from './courses/courses.module';
import {
    DashboardComponent
} from './dashboard.component';
import {
    GroupsListComponent
} from './groups/groups.module';
import {
    LoginComponent
} from './sessions/sessions.module';
import {
    SchoolsCreateComponent,
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
                path        : 'groups/list',
                component   : GroupsListComponent
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