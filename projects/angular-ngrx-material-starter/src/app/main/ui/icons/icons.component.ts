// outer
import { Component, ViewEncapsulation } from '@angular/core';
// inner
import { commonAnimations } from '@common';
// end

@Component({
  selector: 'anms-ui-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: commonAnimations
})
export class IconsComponent {}
