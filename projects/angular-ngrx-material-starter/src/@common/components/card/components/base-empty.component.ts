// outer imports
import {ChangeDetectionStrategy, Input, Component, OnInit, ViewEncapsulation} from '@angular/core';
// inner imports
import {commonAnimations} from '@common/scss/animations';
// imports end


@Component({
  selector: 'anms-base-empty',
  templateUrl: './base-empty.component.html',
  styleUrls: ['./base-empty.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  animations: commonAnimations
})
export class BaseEmptyComponent implements OnInit {
  // Input
  @Input() text = 'No Data';
  @Input() icon = 'folder_open';
  @Input() iconSize = 's-104';
  @Input() textSize = 20;

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
