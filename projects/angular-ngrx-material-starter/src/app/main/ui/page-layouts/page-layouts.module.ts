// outer
import { NgModule } from '@angular/core';
// inner
import { SharedOtherModule, SharedMaterialModule, MaintenanceModule, SidebarModule, DemoModule } from '@common';
//
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
  SimpleRightSidebar4Component,
} from './simple';
import { BlankComponent } from './blank/blank.component';
//
import { PageLayoutRouting } from './page-layout.routing';
// end

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
    SharedOtherModule,
    SharedMaterialModule,
    MaintenanceModule,
    SidebarModule,
    DemoModule,
    PageLayoutRouting
  ]
})
export class PageLayoutsModule {
}
