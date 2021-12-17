import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { AboutComponent } from './components/about/about.component';
import { JewelrAccessoriesComponent } from './components/jewelr-accessories/jewelr-accessories.component';
import { ClothingShoesComponent } from './components/clothing-shoes/clothing-shoes.component';
import { HomeLivingComponent } from './components/home-living/home-living.component';
import { WeddingPartyComponent } from './components/wedding-party/wedding-party.component';
import { HomeComponent } from './components/home/home.component';
import{HttpClientModule} from 
'@angular/common/http';
import { CardComponent } from './components/card/card.component';

import {FormsModule} from '@angular/forms';
import { NgForm }   from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    AboutComponent,
    JewelrAccessoriesComponent,
    ClothingShoesComponent,
    HomeLivingComponent,
    WeddingPartyComponent,
    HomeComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
