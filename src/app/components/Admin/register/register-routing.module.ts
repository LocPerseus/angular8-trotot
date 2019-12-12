import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';

// const routes: Routes = [
//   {path: 'register', component: RegisterComponent}
// ];

@NgModule({
  // declarations: [],
  imports: [
    // RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RegisterRoutingModule { }
