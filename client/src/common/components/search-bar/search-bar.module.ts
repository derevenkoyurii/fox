import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from 'src/common/material.module';
import { SearchBarComponent } from './search-bar.component';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: [SearchBarComponent],
  exports: [SearchBarComponent]
})
export class SearchBarModule {}
