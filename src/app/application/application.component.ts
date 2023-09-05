import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { NgIf } from '@angular/common';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {
  first= new FormControl('', Validators.required);
  last =new FormControl('',Validators.required);
  Date =new FormControl('',Validators.required);
  Gender =new FormControl('',Validators.required);
  Mobile = new FormControl('', [Validators.required, Validators.pattern("[0-9 ]{11}")]);
  Role=new FormControl('', [Validators.required]);


  email = new FormControl('', [Validators.required, Validators.email]);


  matcher = new MyErrorStateMatcher();

}
