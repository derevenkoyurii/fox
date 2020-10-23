import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  // Carded
  {
    path: 'page-layouts/carded/full-width-1',
    component: CardedFullWidth1Component
  },
  {
    path: 'page-layouts/carded/full-width-2',
    component: CardedFullWidth2Component
  },
  {
    path: 'page-layouts/carded/full-width-tabbed-1',
    component: CardedFullWidthTabbed1Component
  },
  {
    path: 'page-layouts/carded/full-width-tabbed-2',
    component: CardedFullWidthTabbed2Component
  },
  {
    path: 'page-layouts/carded/left-sidebar-1',
    component: CardedLeftSidebar1Component
  },
  {
    path: 'page-layouts/carded/left-sidebar-tabbed-1',
    component: CardedLeftSidebarTabbed1Component
  },
  {
    path: 'page-layouts/carded/left-sidebar-2',
    component: CardedLeftSidebar2Component
  },
  {
    path: 'page-layouts/carded/left-sidebar-tabbed-2',
    component: CardedLeftSidebarTabbed2Component
  },
  {
    path: 'page-layouts/carded/right-sidebar-1',
    component: CardedRightSidebar1Component
  },
  {
    path: 'page-layouts/carded/right-sidebar-tabbed-1',
    component: CardedRightSidebarTabbed1Component
  },
  {
    path: 'page-layouts/carded/right-sidebar-2',
    component: CardedRightSidebar2Component
  },
  {
    path: 'page-layouts/carded/right-sidebar-tabbed-2',
    component: CardedRightSidebarTabbed2Component
  },
  // Simple
  {
    path: 'page-layouts/simple/full-width-1',
    component: SimpleFullWidth1Component
  },
  {
    path: 'page-layouts/simple/full-width-tabbed-1',
    component: SimpleFullWidthTabbed1Component
  },
  {
    path: 'page-layouts/simple/left-sidebar-1',
    component: SimpleLeftSidebar1Component
  },
  {
    path: 'page-layouts/simple/left-sidebar-2',
    component: SimpleLeftSidebar2Component
  },
  {
    path: 'page-layouts/simple/left-sidebar-3',
    component: SimpleLeftSidebar3Component
  },
  {
    path: 'page-layouts/simple/left-sidebar-4',
    component: SimpleLeftSidebar4Component
  },
  {
    path: 'page-layouts/simple/right-sidebar-1',
    component: SimpleRightSidebar1Component
  },
  {
    path: 'page-layouts/simple/right-sidebar-2',
    component: SimpleRightSidebar2Component
  },
  {
    path: 'page-layouts/simple/right-sidebar-3',
    component: SimpleRightSidebar3Component
  },
  {
    path: 'page-layouts/simple/right-sidebar-4',
    component: SimpleRightSidebar4Component
  },
  // Blank
  {
    path: 'page-layouts/blank',
    component: BlankComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class PageLayoutRouting {}
