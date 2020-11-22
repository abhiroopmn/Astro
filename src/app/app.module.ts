import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NakshatraSelectorComponent } from './shared/nakshatra-selector/nakshatra-selector.component';
import { DropdownModule } from 'primeng/dropdown';
import { TarabalaComponent } from './tarabala/tarabala.component';
import { LagnaSelectorComponent } from './shared/lagna-selector/lagna-selector.component';
import { HomeComponent } from './home/home.component';
import { RashiSelectorComponent } from './shared/rashi-selector/rashi-selector.component';
import { UserNakshatraService } from './shared/user-nakshatra.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NakshatraPipe } from './shared/nakshatra-selector/nakshatra.pipe';
import { TarabalaPipe } from './tarabala/tarabala.pipe';
import {ChandrabalaComponent} from './chandrabala/chandrabala.component';
import {UserRashiService} from './shared/user-rashi.service';
import {RashiPipe} from './shared/rashi-selector/rashi.pipe';
import {ChandrabalaPipe} from './chandrabala/chandrabala.pipe';
import {ChandrabalaColorPipe} from './chandrabala/chandrabala-color.pipe';
import {GurubalaComponent} from './gurubala/gurubala.component';
import {GurubalaPipe} from './gurubala/gurubala.pipe';
import {GurubalaColorPipe} from './gurubala/gurubalabala-color.pipe';
import { AccordionModule } from 'primeng/accordion';
import {PanchakaComponent} from './panchaka/panchaka.component';
import {ThithiSelectorComponent} from './shared/thithi-selector/thithi-selector.component';
import {DaySelectorComponent} from './shared/day-selector/day-selector.component';
import {UserLagnaService} from './shared/user-lagna.service';

@NgModule({
  declarations: [
    AppComponent,
    NakshatraSelectorComponent,
    TarabalaComponent,
    LagnaSelectorComponent,
    HomeComponent,
    RashiSelectorComponent,
    NakshatraPipe,
    TarabalaPipe,
    ChandrabalaComponent,
    RashiPipe,
    ChandrabalaPipe,
    ChandrabalaColorPipe,
    GurubalaComponent,
    GurubalaPipe,
    GurubalaColorPipe,
    PanchakaComponent,
    ThithiSelectorComponent,
    DaySelectorComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DropdownModule,
    AccordionModule,
    
  ],
  exports: [],
  providers: [UserNakshatraService, UserRashiService, UserLagnaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
