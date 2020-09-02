// outer
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopographyComponent } from './topography.component';
// inner
// end

const routes: Routes = [
  {
    path: 'typography',
    component: TopographyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class TopographyRouting {}
