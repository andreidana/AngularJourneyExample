import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Parameters } from '../parameters';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent implements OnInit {
  form: FormGroup;
  routeParams: Parameters;

  constructor(private router: Router) {
    this.routeParams = <Parameters>this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit() {
    if (!this.routeParams) {
      this.reset();
    }

    this.form = new FormGroup({
      gender: new FormControl(this.routeParams ? this.routeParams.gender : null, Validators.required),
      lookingFor: new FormControl(this.routeParams ? this.routeParams.lookingFor : null, Validators.required),
    });
  }

  reset() {
    this.router.navigate([''], {state: null});
  }

  goToDetails() {
    this.navigateTo(['user-details']);
  }

  goToHobbies() {
    this.navigateTo(['hobbies']);
  }

  private navigateTo(route) {
    this.routeParams.gender = this.form.value.gender;
    this.routeParams.lookingFor = this.form.value.lookingFor;
    this.router.navigate(route, { state: this.routeParams });
  }
}
