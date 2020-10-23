import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { MaterialModule } from 'src/common';

import { NavVerticalCollapsableComponent } from './components/collapsable/collapsable.component';
import { NavVerticalGroupComponent } from './components/group/group.component';
import { NavVerticalItemComponent } from './components/item/item.component';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [
    NavVerticalCollapsableComponent,
    NavVerticalGroupComponent,
    NavVerticalItemComponent,
    NavbarComponent
  ],
  imports: [CommonModule, RouterModule, FlexLayoutModule, MaterialModule],
  exports: [NavbarComponent]
})
export class NavbarModule {}
