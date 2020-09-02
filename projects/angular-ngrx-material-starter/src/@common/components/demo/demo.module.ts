// outer
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
// inner
import { SharedMaterialModule } from '@common/shared-material.module';
import { SharedOtherModule } from '@common/shared-other.module';
//
import {DemoContentComponent} from './demo-content/demo-content.component';
import {DemoSidebarComponent} from './demo-sidebar/demo-sidebar.component';
// end

@NgModule({
  declarations: [
    DemoContentComponent,
    DemoSidebarComponent
  ],
  imports: [
    RouterModule,
    SharedMaterialModule,
    SharedOtherModule
  ],
  exports: [
    DemoContentComponent,
    DemoSidebarComponent
  ]
})
export class DemoModule {
}
