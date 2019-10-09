import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { GenderComponent } from './gender/gender.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  { path: '', redirectTo: 'user-details', pathMatch: 'full' },
  { path: 'user-details', component: UserDetailsComponent, pathMatch: 'full' },
  { path: 'gender', component: GenderComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'overview', component: OverviewComponent },
  { path: '**', redirectTo: 'user-details' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
