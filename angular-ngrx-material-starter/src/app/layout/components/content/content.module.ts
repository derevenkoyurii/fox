import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContentComponent } from './content.component';

@NgModule({
  imports: [RouterModule],
  declarations: [ContentComponent],
  exports: [ContentComponent]
})
export class ContentModule {}
