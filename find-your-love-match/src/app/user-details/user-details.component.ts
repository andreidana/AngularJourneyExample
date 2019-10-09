import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Parameters } from '../parameters';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  form: FormGroup;
  routeParams: Parameters;

  constructor(private router: Router) {
    this.routeParams = <Parameters>this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl(this.routeParams ? this.routeParams.firstName : null, Validators.required),
      lastName: new FormControl(this.routeParams ? this.routeParams.lastName : null, Validators.required),
      email: new FormControl(this.routeParams ? this.routeParams.email : null, [Validators.required, Validators.email])
    });
  }

  reset() {
    this.routeParams = null;
    this.form.reset();
    this.router.navigate([''], {state: null});
  }

  goToGender() {
    this.routeParams = this.routeParams ? this.routeParams : <Parameters>{};
    this.routeParams.firstName = this.form.value.firstName;
    this.routeParams.lastName = this.form.value.lastName;
    this.routeParams.email = this.form.value.email;
    this.router.navigate(['/gender'], {state: this.routeParams});
  }
}
