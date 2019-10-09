import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Parameters } from '../parameters';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {
  form: FormGroup;
  routeParams: Parameters;

  constructor(private router: Router) {
    this.routeParams = <Parameters>this.router.getCurrentNavigation().extras.state;
    console.log(this.routeParams);
  }

  ngOnInit() {
    if (!this.routeParams) {
      this.reset();
    }

    this.form = new FormGroup({
      hobbies: new FormControl(this.routeParams ? this.routeParams.hobbies : null, Validators.required),
      description: new FormControl(this.routeParams ? this.routeParams.description : null, Validators.required),
    });
  }

  reset() {
    this.router.navigate([''], {state: null});
  }

  goToGender() {
    this.navigateTo(['gender']);
  }

  goToOverview() {
    this.navigateTo(['overview']);
  }

  private navigateTo(route) {
    this.routeParams.hobbies = this.form.value.hobbies;
    this.routeParams.description = this.form.value.description;
    this.router.navigate(route, { state: this.routeParams });
  }
}
