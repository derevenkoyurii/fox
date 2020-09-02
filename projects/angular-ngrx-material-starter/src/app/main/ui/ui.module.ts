// outer
import { NgModule } from '@angular/core';
// inner
import { CardsModule } from './cards/cards.module';
import { FormsModule } from './forms/forms.module';
import { IconsModule } from './icons/icons.module';
import { TopographyModule } from './topography/topography.module';
import { PageLayoutsModule } from './page-layouts/page-layouts.module';
// end

@NgModule({
  imports: [
    CardsModule,
    FormsModule,
    IconsModule,
    TopographyModule,
    PageLayoutsModule
  ]
})
export class UIModule {
}
