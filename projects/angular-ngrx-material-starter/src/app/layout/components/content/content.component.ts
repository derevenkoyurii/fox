// outer
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation
} from '@angular/core';
// end

@Component({
  selector: 'anms-layout-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent {}
