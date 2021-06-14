import { RegisterComponent } from './../../pages/register/register.component';
import { Routes } from '@angular/router';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { HomeComponent } from 'src/app/pages/home/home.component';

export const AuthLayoutRoutes:Routes =[
    {path: "login",component:LoginComponent},
    {path:"register" , component:RegisterComponent},
    {path:"home" , component:HomeComponent}

] ;