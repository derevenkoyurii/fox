import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MaterialModule,
  MaintenanceModule,
  SidebarModule,
  DemoModule,
  DirectivesModule,
  PipesModule
} from 'src/common';
import {
  CardedFullWidth1Component,
  CardedFullWidth2Component,
  CardedFullWidthTabbed1Component,
  CardedFullWidthTabbed2Component,
  CardedLeftSidebar1Component,
  CardedLeftSidebar2Component,
  CardedLeftSidebarTabbed1Component,
  CardedLeftSidebarTabbed2Component,
  CardedRightSidebar1Component,
  CardedRightSidebar2Component,
  CardedRightSidebarTabbed1Component,
  CardedRightSidebarTabbed2Component
} from './carded';
import {
  SimpleFullWidth1Component,
  SimpleFullWidthTabbed1Component,
  SimpleLeftSidebar1Component,
  SimpleLeftSidebar2Component,
  SimpleLeftSidebar3Component,
  SimpleLeftSidebar4Component,
  SimpleRightSidebar1Component,
  SimpleRightSidebar2Component,
  SimpleRightSidebar3Component,
  SimpleRightSidebar4Component
} from './simple';
import { BlankComponent } from './blank/blank.component';

import { PageLayoutRouting } from './page-layout.routing';

@NgModule({
  declarations: [
    CardedFullWidth1Component,
    CardedFullWidth2Component,
    CardedFullWidthTabbed1Component,
    CardedFullWidthTabbed2Component,
    CardedLeftSidebar1Component,
    CardedLeftSidebar2Component,
    CardedLeftSidebarTabbed1Component,
    CardedLeftSidebarTabbed2Component,
    CardedRightSidebar1Component,
    CardedRightSidebar2Component,
    CardedRightSidebarTabbed1Component,
    CardedRightSidebarTabbed2Component,

    SimpleFullWidth1Component,
    SimpleFullWidthTabbed1Component,
    SimpleLeftSidebar1Component,
    SimpleLeftSidebar2Component,
    SimpleLeftSidebar3Component,
    SimpleLeftSidebar4Component,
    SimpleRightSidebar1Component,
    SimpleRightSidebar2Component,
    SimpleRightSidebar3Component,
    SimpleRightSidebar4Component,

    BlankComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    PerfectScrollbarModule,

    MaterialModule,
    DirectivesModule,
    PipesModule,
    MaintenanceModule,
    SidebarModule,
    DemoModule,

    PageLayoutRouting
  ]
})
export class PageLayoutsModule {}
