// outer
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input
} from '@angular/core';
// end

@Component({
  selector: 'anms-vertical-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavVerticalGroupComponent {
  @HostBinding('class') classes = 'nav-group nav-item';
  @Input() item: any;
}
