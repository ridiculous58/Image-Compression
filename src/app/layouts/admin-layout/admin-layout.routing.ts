import { LoginGuard } from './../../guards/login.guard';
import { JpegComponent } from './../../pages/jpeg/jpeg.component';
import { UserComponent } from './../../pages/user/user.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';

export const AdminLayoutRoutes:Routes =[
    {path: "dashboard",component:DashboardComponent},
    {path:"user" , component:UserComponent},
    {path:"jpeg" , component:JpegComponent}

] ;