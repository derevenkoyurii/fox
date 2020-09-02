// outer imports
import { NgModule } from '@angular/core';
// inner imports
import { SharedMaterialModule } from '@common/shared-material.module';
import { SharedOtherModule } from '@common/shared-other.module';
//
import { CardComponent } from './card.component';
import { BaseEmptyComponent } from './components/base-empty.component';
import { BaseLoaderComponent } from './components/base-loader.component';
// end

@NgModule({
  declarations: [CardComponent, BaseEmptyComponent, BaseLoaderComponent],
  imports: [
    SharedMaterialModule,
    SharedOtherModule,
  ],
  exports: [CardComponent, BaseEmptyComponent, BaseLoaderComponent]
})
export class CardModule {}
