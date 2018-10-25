import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentComponent } from './component/component.component';
import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",pathMatch: "full", redirectTo:"/home"},
  {path:"home",component:HomeComponent},
  {path:"new",component:ComponentComponent},
  {path:"edit/:id",component:EditComponent},
  {path:'**',component:DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
