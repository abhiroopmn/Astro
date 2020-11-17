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

@NgModule({
  declarations: [
    AppComponent,
    NakshatraSelectorComponent,
    TarabalaComponent,
    LagnaSelectorComponent,
    HomeComponent,
    RashiSelectorComponent,
    NakshatraPipe,
    TarabalaPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DropdownModule
  ],
  exports: [],
  providers: [UserNakshatraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
