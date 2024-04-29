import { Routes } from '@angular/router';
import { DoctorDashboardComponent } from './Doctordashboard/dashboard.component';
import { PetDashBoardComponent } from './PetsDashBoard/petappointment.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
    {
        path: "doctordashboard", component: DoctorDashboardComponent, title:"DashBoard"
    },
    {
        path: "petsdashboard", component: PetDashBoardComponent, title:"DashBoard"
    },
    {
        path: "admindashboard", component: AdminDashboardComponent, title:"DashBoard"
    }
];
