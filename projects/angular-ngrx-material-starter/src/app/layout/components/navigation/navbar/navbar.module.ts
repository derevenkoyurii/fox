// outer
import { NgModule } from '@angular/core';
// inner
import { SharedMaterialModule, SharedOtherModule } from '@common';
//
import { NavVerticalCollapsableComponent } from './components/collapsable/collapsable.component';
import { NavVerticalGroupComponent } from './components/group/group.component';
import { NavVerticalItemComponent } from './components/item/item.component';
import { NavbarComponent } from './navbar.component';
// end

@NgModule({
  declarations: [
    NavVerticalCollapsableComponent,
    NavVerticalGroupComponent,
    NavVerticalItemComponent,
    NavbarComponent
  ],
  imports: [
    SharedMaterialModule,
    SharedOtherModule,
  ],
  exports: [NavbarComponent]
})
export class NavbarModule {}
