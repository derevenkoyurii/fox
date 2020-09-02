// outer
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards.component';
// inner
// end

const routes: Routes = [
  {
    path: 'cards',
    component: CardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class CardsRouting {}
