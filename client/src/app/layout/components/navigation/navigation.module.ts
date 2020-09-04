import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule, SearchBarModule } from 'src/common';
import { NavbarModule } from './navbar';
import { NavigationComponent } from './navigation.component';

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    RouterModule,
    PerfectScrollbarModule,
    FlexLayoutModule,

    MaterialModule,
    SearchBarModule,

    NavbarModule
  ],
  exports: [NavigationComponent]
})
export class NavigationModule {}
