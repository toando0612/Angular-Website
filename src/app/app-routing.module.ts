import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //for contact form
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
