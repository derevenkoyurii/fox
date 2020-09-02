// outer
import { Component, ViewEncapsulation } from '@angular/core';
// inner
import { commonAnimations } from '@common';
// end

@Component({
  selector: 'anms-ui-topography',
  templateUrl: './topography.component.html',
  styleUrls: ['./topography.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: commonAnimations
})
export class TopographyComponent {}
