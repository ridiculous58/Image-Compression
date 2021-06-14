import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginGuard } from './guards/login.guard';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"home",
    pathMatch:"full"
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import('./layouts/auth-layout/auth-layout.module').then(mod => mod.AuthLayoutModule)
      }
    ],
  }, 
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(mod => mod.AdminLayoutModule)
      }
    ],
    canActivate:[LoginGuard]
  }, 
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    }),
    BrowserModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
