import { Routes } from '@angular/router';

import { ErrorComponent } from './error.component';

export const errorRoute: Routes = [
    {
        path: 'error',
        component: ErrorComponent,
        data: {
            authorities: [],
            pageTitle: 'DmitricsELAASystem'
        }
    },
    {
        path: 'accessdenied',
        component: ErrorComponent,
        data: {
            authorities: [],
            pageTitle: 'DmitricsELAASystem',
            error403: true
        }
    },
    {
        path: '404',
        component: ErrorComponent,
        data: {
            authorities: [],
            pageTitle: 'DmitricsELAASystem',
            error404: true
        }
    },
    {
        path: '**',
        redirectTo: '/404'
    }
];
