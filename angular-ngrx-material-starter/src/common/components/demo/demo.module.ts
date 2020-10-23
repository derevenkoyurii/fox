import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from 'src/common/material.module';

import { DemoContentComponent } from './demo-content/demo-content.component';
import { DemoSidebarComponent } from './demo-sidebar/demo-sidebar.component';

@NgModule({
  declarations: [DemoContentComponent, DemoSidebarComponent],
  imports: [RouterModule, MaterialModule],
  exports: [DemoContentComponent, DemoSidebarComponent]
})
export class DemoModule {}
