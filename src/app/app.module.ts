import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion'; 
import {MenuItem} from 'primeng/api'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import { HomeComponent } from './home/home.component';
import {MenubarModule} from 'primeng/menubar';
import { AuthGuard } from './guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    AccordionModule,
    BrowserAnimationsModule,
    InputTextModule,
    PasswordModule,
    MenubarModule
  ],
  providers: [LoginComponent, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
