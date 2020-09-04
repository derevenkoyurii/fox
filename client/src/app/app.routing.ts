import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'apps/todo/all'
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'apps',
    loadChildren: () => import('./main/apps/apps.module')
      .then((m) => m.AppsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'ui',
    loadChildren: () => import('./main/ui/ui.module')
      .then((m) => m.UIModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {}
