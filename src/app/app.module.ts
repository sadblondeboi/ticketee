import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {IvyCarouselModule} from 'angular-responsive-carousel';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { MenuButtonComponent } from './buttons/menu-button/menu-button.component';
import { SlideshowComponent } from './views/home/slideshow/slideshow.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    WelcomeComponent,
    HeaderComponent,
    MenuButtonComponent,
    SlideshowComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
