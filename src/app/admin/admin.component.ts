import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
     
  isSubmitted=false;
    form: FormGroup



  constructor(private authService:AuthService,
    private router:Router,
    private formBuilder:FormBuilder) { }

    

  ngOnInit() {
    this.form=this.formBuilder.group(
      {

        fname: ['',Validators.required],
        email:['', Validators.compose([Validators.required,Validators.email])],
         city: ['',Validators.required],
         no: ['',Validators.required],
         subscribe: ['',Validators.required],
         code :['',Validators.required],
         terms :['',Validators.required]

      }

    );
  }
 get formControls(){

  return this.form.controls;
 }


  // logout(){
  //   this.authService.logout;
  //   this.router.navigateByUrl('/login');
  // }


  submit(){
    this.isSubmitted=true;
    if(this.form.invalid){
      return false;
    }
    else{
      console.log("submitted successfully");
    }



  }


}
