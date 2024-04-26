import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PetappointmentComponent } from './petappointment/petappointment.component';

export const routes: Routes = [
    {
        path: "dashboard", component: DashboardComponent, title:"dashboard"
    },
    {
        path: "pets", component: PetappointmentComponent, title:"petapointments"
    }
];
