import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AccomodationsComponent } from './accomodations/accomodations.component';
import { TravelComponent } from './travel/travel.component';
import { DetailsComponent } from './details/details.component';
import { GuestBookComponent } from './guest-book/guest-book.component';
import { WeatherComponent } from './home/weather/weather.component';
import { CountdownComponent } from './home/countdown/countdown.component';
import { HomeComponent } from './home/home.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { RegistryComponent } from './registry/registry.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'ourstory', component: OurStoryComponent },
  {path: 'details', component: DetailsComponent },
  {path: 'gallery', component: GalleryComponent },
  {path: 'guestbook', component: GuestBookComponent },
  {path: 'rsvp', component: RsvpComponent },
  {path: 'travel', component: TravelComponent },
  {path: 'registry', component: RegistryComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    RsvpComponent,
    GalleryComponent,
    AccomodationsComponent,
    TravelComponent,
    DetailsComponent,
    GuestBookComponent,
    WeatherComponent,
    CountdownComponent,
    HomeComponent,
    MenuBarComponent,
    OurStoryComponent,
    RegistryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
