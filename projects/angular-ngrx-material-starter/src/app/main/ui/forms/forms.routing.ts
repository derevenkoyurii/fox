// outer
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms.component';
// inner
// end

const routes: Routes = [
  {
    path: 'forms',
    component: FormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class FormsRouting {}
