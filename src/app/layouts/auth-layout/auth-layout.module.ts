import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './../../pages/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/pages/login/login.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,

    ReactiveFormsModule,
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
  ]
})
export class AuthLayoutModule { }
