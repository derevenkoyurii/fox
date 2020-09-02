// outer
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
//
import {TranslateModule} from '@ngx-translate/core';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
// inner
import {CommonDirectivesModule} from './directives';
import {CommonPipesModule} from './pipes';
// end

@NgModule({
  imports: [],
  exports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    //
    FlexLayoutModule,
    PerfectScrollbarModule,
    //
    CommonPipesModule,
    CommonDirectivesModule,
  ]
})
export class SharedOtherModule {}
