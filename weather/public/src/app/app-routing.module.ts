import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityComponent } from './city/city.component';


const routes: Routes = [
  { path: ':city', component: CityComponent },
  { path: '', pathMatch: 'full', redirectTo: '/Dallas' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
