// outer
import { NgModule } from '@angular/core';
// inner
import { SharedOtherModule, SharedMaterialModule, MaintenanceModule } from '@common';
//
import { TopographyRouting } from './topography.routing';
import { TopographyComponent } from './topography.component';
// end

@NgModule({
  declarations: [
    TopographyComponent
  ],
  imports: [
    SharedOtherModule,
    SharedMaterialModule,
    MaintenanceModule,
    //
    TopographyRouting,
  ]
})
export class TopographyModule {}
