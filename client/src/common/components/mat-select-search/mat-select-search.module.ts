import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

import { MatSelectSearchComponent } from './mat-select-search.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule, MatInputModule],
  declarations: [MatSelectSearchComponent],
  exports: [MatButtonModule, MatInputModule, MatSelectSearchComponent]
})
export class MatSelectSearchModule {}
