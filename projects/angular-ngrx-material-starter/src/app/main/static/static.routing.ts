// outer
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// end
const routes: Routes = [
  {
    path: 'error',
    loadChildren: () =>
      import('./errors/errors.module').then((m) => m.ErrorsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class StaticRouting {}
