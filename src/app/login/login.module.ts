import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AMDModule } from '../amd.module';
import { AuthService } from '../services/auth.service/auth.service';
import { IonicModule } from '@ionic/angular';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AMDModule,
    AngularFireAuthModule,
    LoginPageRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  declarations: [LoginPage]
})
export class LoginPageModule {}
