// outer
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// inner
import { SharedMaterialModule, SharedOtherModule } from '@common';
//
import { ErrorsRouting } from './errors.routing';
//
import { Error404Component } from './error-404/error-404.component';
import { Error500Component } from './error-500/error-500.component';
// end

@NgModule({
  imports: [
    SharedMaterialModule,
    SharedOtherModule,
    //
    ErrorsRouting,
    RouterModule
  ],
  declarations: [Error404Component, Error500Component]
})
export class ErrorsModule {}
