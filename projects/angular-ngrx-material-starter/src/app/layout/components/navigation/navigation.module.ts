// outer
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// inner
import {
  SharedOtherModule,
  SharedMaterialModule,
  SearchBarModule,
  CardModule
} from '@common';
//
import { NavbarModule } from './navbar';
//
import { NavigationComponent } from './navigation.component';
// end

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    RouterModule,
    //
    SharedOtherModule,
    SharedMaterialModule,
    SearchBarModule,
    CardModule,
    //
    NavbarModule
  ],
  exports: [NavigationComponent]
})
export class NavigationModule {}
