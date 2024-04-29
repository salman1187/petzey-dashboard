import { Routes } from '@angular/router';
import { DoctorDashboardComponent } from './Doctordashboard/dashboard.component';
import { PetDashBoardComponent } from './PetsDashBoard/petappointment.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
    {
        path: "dashboard", component: DoctorDashboardComponent, title:"dashboard"
    },
    {
        path: "pets", component: PetDashBoardComponent, title:"PetsDashBoard"
    },
    {
        path: "admin", component: AdminDashboardComponent, title:"AdminDashBoard"
    }
];
