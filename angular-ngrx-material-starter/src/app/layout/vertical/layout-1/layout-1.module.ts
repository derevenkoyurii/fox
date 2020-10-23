import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { DirectivesModule, SidebarModule } from 'src/common';

import { ContentModule } from '../../components/content/content.module';
import { FooterModule } from '../../components/footer/footer.module';
import { ToolbarModule } from '../../components/toolbar/toolbar.module';
import { NavigationModule } from '../../components/navigation/navigation.module';
//
import { VerticalLayout1Component } from './layout-1.component';
// end

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PerfectScrollbarModule,

    DirectivesModule,
    SidebarModule,
    ContentModule,
    FooterModule,
    ToolbarModule,
    NavigationModule
  ],
  declarations: [VerticalLayout1Component],
  exports: [VerticalLayout1Component]
})
export class VerticalLayout1Module {}
