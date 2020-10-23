import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { DirectivesModule, SidebarModule } from 'src/common';

import { EmptyComponent } from './empty.component';
import { ContentModule } from '../components/content/content.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PerfectScrollbarModule,

    DirectivesModule,
    SidebarModule,
    ContentModule
  ],
  declarations: [EmptyComponent],
  exports: [EmptyComponent]
})
export class EmptyModule {}
