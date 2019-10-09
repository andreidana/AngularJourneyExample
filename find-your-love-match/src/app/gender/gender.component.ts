import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      gender: new FormControl(null, Validators.required),
      lookingFor: new FormControl(null, Validators.required),
    });
  }

}
