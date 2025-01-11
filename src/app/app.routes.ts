import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OrgRegisterComponent } from './pages/org-register/org-register.component';

export const routes: Routes = [
    {
        path:'Eventure',
        component:HomeComponent,
        runGuardsAndResolvers: 'always',
    },
    {
        path:'register-org',
        component:OrgRegisterComponent,
        runGuardsAndResolvers: 'always',
    }
];
