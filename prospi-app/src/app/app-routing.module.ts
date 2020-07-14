import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { OrderComponent } from './order/order.component';
import { BatterOrderComponent } from './batter-order/batter-order.component';
import { PitcherOrderComponent } from './pitcher-order/pitcher-order.component';
import { ComboComponent } from './combo/combo.component';
import { CandidatePitcherComponent } from './candidate-pitcher/candidate-pitcher.component';
import { CandidateBatterComponent } from './candidate-batter/candidate-batter.component';
import { TitleComponent } from './title/title.component';

const routes: Routes = [
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: 'landing', component: LandingComponent },
    // { path: 'landing/:position', component: LandingComponent },
    { path: 'order', component: OrderComponent },
    { path: 'batter-order', component: BatterOrderComponent },
    { path: 'pitcher-order', component: PitcherOrderComponent },
    { path: 'combo', component: ComboComponent },
    // { path: 'candidate/:position', component: CandidateComponent },
    { path: 'pitcher-candidate/:position', component: CandidatePitcherComponent },
    { path: 'batter-candidate/:position', component: CandidateBatterComponent },
    { path: 'title/:position', component: TitleComponent }
    ];


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
