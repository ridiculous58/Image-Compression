import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private authService:AuthService,private toastrService:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }


  createRegisterForm(){
    this.registerForm = this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required],
      firstName:["",Validators.required],
      lastName:["",Validators.required],
    });
  }
  register(){
    if(this.registerForm.valid){
      let registerForm = Object.assign({},this.registerForm.value);
      this.authService.register(registerForm).subscribe(response => {
        this.toastrService.info(response.message);
        localStorage.setItem("token",response.data.token);
        this.router.navigate(["dashboard"]);
      },responseError =>{
        this.toastrService.error(responseError.error);
      });
    }
  }

}
