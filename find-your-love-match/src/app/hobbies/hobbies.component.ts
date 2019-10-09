import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      hobbies: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
    });
  }

}
