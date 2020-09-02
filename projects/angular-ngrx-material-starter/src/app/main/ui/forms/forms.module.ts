// outer
import { NgModule } from '@angular/core';
// inner
import { SharedOtherModule, SharedMaterialModule, MaintenanceModule } from '@common';
//
import { FormsRouting } from './forms.routing';
import { FormsComponent } from './forms.component';
// end

@NgModule({
  declarations: [
    FormsComponent
  ],
  imports: [
    SharedOtherModule,
    SharedMaterialModule,
    MaintenanceModule,
    //
    FormsRouting,
  ]
})
export class FormsModule {}
