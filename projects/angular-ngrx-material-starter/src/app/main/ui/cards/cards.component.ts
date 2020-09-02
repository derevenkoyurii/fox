// outer
import { Component, ViewEncapsulation } from '@angular/core';
// inner
import { commonAnimations } from '@common';
// end

@Component({
  selector: 'anms-ui-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: commonAnimations
})
export class CardsComponent {}
