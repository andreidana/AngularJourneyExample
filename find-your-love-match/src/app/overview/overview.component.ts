import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Parameters } from '../parameters';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  routeParams: Parameters;

  constructor(private router: Router) {
    this.routeParams = <Parameters>this.router.getCurrentNavigation().extras.state;
    console.log(this.routeParams);
  }

  ngOnInit() {
    if (!this.routeParams) {
      this.reset();
    }
  }

  reset() {
    this.router.navigate([''], {state: null});
  }

  goToHobbies() {
    this.router.navigate(['hobbies'], {state: this.routeParams});
  }

  save() {
    console.log('save');
  }
}
