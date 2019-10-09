import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent implements OnInit {
  form: FormGroup;
  userDetailsData: any;

  constructor(private router: Router) {
    this.userDetailsData = this.router.getCurrentNavigation().extras.state;
    console.log(this.userDetailsData);
  }

  ngOnInit() {
    this.form = new FormGroup({
      gender: new FormControl(null, Validators.required),
      lookingFor: new FormControl(null, Validators.required),
    });
  }

  reset() {
    this.router.navigate([''], {state: null});
  }

}
