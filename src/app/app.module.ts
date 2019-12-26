import { JwtInterceptor } from './../helper/jwt.interceptor';
import { AuthGuard } from './components/Admin/login/auth.guard';
import { AuthService } from './services/auth/auth.service';
import { RegisterModule } from './components/Admin/register/register.module';
import { NewsService } from './services/news/news.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './components/Admin/login/login.module';
import { DashboardModule } from './components/Admin/dashboard/dashboard.module';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    LoginModule,
    DashboardModule,
    HttpClientModule,
    RegisterModule
  ],
  providers: [
    NewsService,
    AuthGuard,
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
