import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['../../authentication.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit(): void
  {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }


}
