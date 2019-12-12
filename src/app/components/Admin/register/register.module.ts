import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { NgModule } from '@angular/core';

@NgModule({

  imports: [
    RegisterRoutingModule,
    FormsModule
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
