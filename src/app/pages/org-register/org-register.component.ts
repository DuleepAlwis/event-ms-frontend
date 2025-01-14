import { Component } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-org-register',
  standalone: true,
  imports: [ReactiveFormsModule], 
  templateUrl: './org-register.component.html',
  styleUrl: './org-register.component.scss'
})
export class OrgRegisterComponent {

  uniqueKey = Date.now(); // Use a unique key

  cacheBuster: string = '';

  formType = "userForm";
  error:string="";
  orgForm:FormGroup;
  userForm:FormGroup;

  constructor(private fb:FormBuilder,private router: Router){
    this.orgForm = this.fb.group({
      orgName:new FormControl('',[Validators.maxLength(11),Validators.minLength(3),Validators.required]),
      orgEmail:new FormControl('',[Validators.email,Validators.required]),
      orgContactNo:new FormControl('',[Validators.maxLength(13),Validators.minLength(10),Validators.required])
    });
  
    this.userForm = this.fb.group({
      userName:new FormControl('',[Validators.maxLength(11),Validators.minLength(3),Validators.required]),
      userEmail:new FormControl('',[Validators.email,Validators.required]),
      userPassword:new FormControl('',[Validators.minLength(7),Validators.required,Validators.pattern(/.*\d[A-Za-z\d]{8,16}$/) ]), //This pattern ensures that the password contains at least one letter, one digit, and is between eight and sixteen characters in length.
      userContactNo:new FormControl('',[Validators.maxLength(13),Validators.minLength(10),Validators.required])
    })
  }

  ngOnInit() {
    this.cacheBuster = Date.now().toString(); // Generate a unique cache-busting value
  }

  displayForm(formType:string){
    this.formType = formType;
  }

  saveData(){
    console.info(this.userForm.invalid);
    console.info(this.orgForm.invalid);
    
    if(this.formType==='userForm' && !this.userForm.invalid){
      console.info("User form info");
      console.log(this.userForm);
    }else if(this.formType==='orgForm' && !this.orgForm.invalid){
      console.info("Org form info");
      console.log(this.orgForm);
    }else{
      this.error = "Please fill the required fields"
    }
  }

  resetForm(){
    this.error = "";
  }

  navigateToHome(){
    this.router.navigate(['/']);
  }

}
