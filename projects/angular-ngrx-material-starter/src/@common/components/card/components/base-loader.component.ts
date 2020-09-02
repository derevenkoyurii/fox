import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  Input
} from '@angular/core';

@Component({
  selector: 'anms-base-loader',
  templateUrl: './base-loader.component.html',
  styleUrls: ['./base-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class BaseLoaderComponent implements OnInit {
  // Input
  @Input() spinDiameter = 70;
  @Input() strokeWidth = 6;

  /**
   * Constructor
   *
   */
  constructor() {}

  // ---------------------------------------------------------------------------
  // @ Lifecycle hooks
  // ---------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {}
}
