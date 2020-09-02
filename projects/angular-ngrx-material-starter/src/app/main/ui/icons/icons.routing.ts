// outer
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconsComponent } from './icons.component';
// inner
// end

const routes: Routes = [
  {
    path: 'icons',
    component: IconsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class IconsRouting {}
