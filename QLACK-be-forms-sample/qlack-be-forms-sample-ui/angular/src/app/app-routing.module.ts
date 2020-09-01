import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormOpenComponent} from './form-open/form-open.component';
import {FormEditComponent} from './form-edit/form-edit.component';


const routes: Routes = [{path: 'form-open', component: FormOpenComponent},
  {path: 'form-edit/:app/:form/:id', component: FormEditComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
