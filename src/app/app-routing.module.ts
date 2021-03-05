import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawingsComponent } from './drawings/drawings.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "",
  component: HomeComponent},
  {path: "drawings/:category",
  component: DrawingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
