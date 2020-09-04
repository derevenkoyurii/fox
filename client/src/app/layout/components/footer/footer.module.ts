import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/common';

import { FooterComponent } from './footer.component';

@NgModule({
  imports: [MaterialModule],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule {}
