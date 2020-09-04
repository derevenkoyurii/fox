import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//
import { KeysPipe } from './keys.pipe';
import { GetByIdPipe } from './getById.pipe';
import { FilterPipe } from './filter.pipe';
import { SafeHtmlPipe } from './safeHtml.pipe';
import { SafeDecimalPipe } from './safeDecimal.pipe';

const PIPES = [
  KeysPipe,
  FilterPipe,
  SafeHtmlPipe,
  SafeDecimalPipe,
  GetByIdPipe
];

@NgModule({
  imports: [CommonModule],
  declarations: [...PIPES],
  exports: [...PIPES]
})
export class PipesModule {}
