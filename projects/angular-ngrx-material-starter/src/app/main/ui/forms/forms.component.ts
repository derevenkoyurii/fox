// outer
import { Component, ViewEncapsulation } from '@angular/core';
// inner
import { commonAnimations } from '@common';
// end

@Component({
  selector: 'anms-ui-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: commonAnimations
})
export class FormsComponent {}
