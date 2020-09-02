// outer
import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';
// end

@Component({
  selector: 'anms-error-404',
  templateUrl: './error-404.component.html',
  styleUrls: ['./error-404.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Error404Component implements OnInit {
  /**
   * Constructor
   */
  constructor() {}

  /**
   * On init
   */
  ngOnInit(): void {}
}
