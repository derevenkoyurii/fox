// outer imports
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
// inner imports
import { MatSelectSearchComponent } from './mat-select-search.component';
// imports end

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule, MatInputModule],
  declarations: [MatSelectSearchComponent],
  exports: [MatButtonModule, MatInputModule, MatSelectSearchComponent]
})
export class MatSelectSearchModule {}
