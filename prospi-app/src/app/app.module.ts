import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatListModule } from '@angular/material/list';

import { MatButtonModule } from '@angular/material/button';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderComponent } from './order/order.component';
import { PitcherOrderComponent } from './pitcher-order/pitcher-order.component';
import { BatterOrderComponent } from './batter-order/batter-order.component';
import { FilterComponent } from './filter/filter.component';
import { ComboComponent } from './combo/combo.component';
import { CandidateComponent } from './candidate/candidate.component';
import { TitleComponent } from './title/title.component';
import { CandidatePitcherComponent } from './candidate-pitcher/candidate-pitcher.component';
import { CandidateBatterComponent } from './candidate-batter/candidate-batter.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    OrderComponent,
    PitcherOrderComponent,
    BatterOrderComponent,
    FilterComponent,
    ComboComponent,
    CandidateComponent,
    TitleComponent,
    CandidatePitcherComponent,
    CandidateBatterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
