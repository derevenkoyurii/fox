// outer
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// inner
import { SidebarComponent } from './sidebar.component';
// end

@NgModule({
  imports: [CommonModule],
  declarations: [SidebarComponent],
  exports: [SidebarComponent]
})
export class SidebarModule {}
