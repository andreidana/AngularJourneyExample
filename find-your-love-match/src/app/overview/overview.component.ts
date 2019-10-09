import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { Parameters } from '../parameters';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  form: FormGroup;
  routeParams: Parameters;

  constructor(private router: Router, private service: BackendService) {
    this.routeParams = <Parameters>this.router.getCurrentNavigation().extras.state;
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
    this.service.saveUserDetails(this.routeParams).subscribe(
      data => console.log('Sucesfully saved data!'),
      error => console.log(error)
    );
  }
}
