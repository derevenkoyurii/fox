import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//
import { SharedMaterialModule } from '@common/shared-material.module';
import { SharedOtherModule } from '@common/shared-other.module';
//
import { SearchBarComponent } from './search-bar.component';

@NgModule({
  imports: [
    RouterModule,
    // Shared
    SharedMaterialModule,
    SharedOtherModule
  ],
  declarations: [SearchBarComponent],
  exports: [SearchBarComponent]
})
export class SearchBarModule {}
