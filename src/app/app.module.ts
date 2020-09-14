import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {IvyCarouselModule} from 'angular-responsive-carousel';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { RegisterComponent } from './components/register/register.component';
import { SlideshowComponent } from './components/home/slideshow/slideshow.component';
import { SearchBarComponent } from './components//home/search-bar/search-bar.component';

import { MenuButtonComponent } from './buttons/menu-button/menu-button.component';
import { ButtonComponent } from './buttons/button/button.component';
import { EventListComponent } from './components/home/event-list/event-list.component';
import { EventComponent } from './views/event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    MenuButtonComponent,
    SlideshowComponent,
    HomeComponent,
    FooterComponent,
    SearchBarComponent,
    ButtonComponent,
    EventListComponent,
    EventComponent
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
