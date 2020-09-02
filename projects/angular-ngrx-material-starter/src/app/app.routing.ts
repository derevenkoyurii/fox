// outer
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// inner
// end

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'ui/page-layouts/carded/left-sidebar-tabbed-2'
  },
  {
    path: 'apps',
    loadChildren: () => import('./main/apps/apps.module').then((m) => m.AppsModule)
  },
  {
    path: 'ui',
    loadChildren: () => import('./main/ui/ui.module').then((m) => m.UIModule)
  },
  {
    path: 'static',
    loadChildren: () => import('./main/static/static.module').then((m) => m.StaticModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: []
})
export class AppRouting {
}
