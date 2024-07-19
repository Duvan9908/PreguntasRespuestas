import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrl: './cambiar-password.component.css'
})
export class CambiarPasswordComponent implements OnInit{
  cambiarPassword: FormGroup;

  constructor( private fb: FormBuilder) { 
    this.cambiarPassword = this.fb.group({
      passwordOld: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['']
    }, {validator: this.checkPassword});
  }

  ngOnInit(): void {
    
  }

  checkPassword(group: FormGroup): any {
    const pass = group.controls['newPassword'].value;
    const confirmPass = group.controls['confirmPassword'].value;
    return pass === confirmPass ? null : {notSame: true};

  }

  guardarPassword(): void {
    console.log(this.cambiarPassword);
  }
}
