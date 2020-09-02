// outer
import { NgModule } from '@angular/core';
// inner
import { SharedOtherModule, SharedMaterialModule, MaintenanceModule } from '@common';
//
import { IconsRouting } from './icons.routing';
import { IconsComponent } from './icons.component';
// end

@NgModule({
  declarations: [
    IconsComponent
  ],
  imports: [
    SharedOtherModule,
    SharedMaterialModule,
    MaintenanceModule,
    //
    IconsRouting,
  ]
})
export class IconsModule {}
