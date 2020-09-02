// outer
import { NgModule } from '@angular/core';
// inner
import { SharedOtherModule, SharedMaterialModule, DemoModule, HighlightModule, MaintenanceModule } from '@common';
//
import { CardsRouting } from './cards.routing';
import { CardsComponent } from './cards.component';
// end

@NgModule({
  declarations: [
    CardsComponent
  ],
  imports: [
    SharedOtherModule,
    SharedMaterialModule,
    DemoModule,
    HighlightModule,
    MaintenanceModule,
    //
    CardsRouting,
  ]
})
export class CardsModule {}
