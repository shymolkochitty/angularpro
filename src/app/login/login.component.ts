import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Loginuser } from '../loginuser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginform:FormGroup;
  isSubmitted=false;
  loginuser:Loginuser;

  constructor(private authService:AuthService,
                private router:Router,
                private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.loginform=this.formBuilder.group(
      {
        email:['', Validators.compose([Validators.required,Validators.email])],
         password:['',Validators.required]


      }

    );
  }

  get formControls(){
    return this.loginform.controls;
  }


    login(){
      console.log(this.loginform.value);
      this.isSubmitted=true;
      if(this.loginform.valid){
         
        this.authService.login(this.loginform.value).subscribe(
            data =>{
              this.loginuser=data;
              console.log(data);
              console.log(data.email)

                if(data.email!=null){
                  this.isSubmitted=true;
                  this.router.navigateByUrl('/admin');
                }

                else{
                  window.alert("wrong username or password");
                }
              }

          );

        }

        // alert("user form is valid");
        
        // this.authService.login(this.loginform.value);
        // this.router.navigateByUrl('/admin');
        // return;
        else{
          window.alert('user form is invalid');
          return;
        }
      }
      
      
    }



