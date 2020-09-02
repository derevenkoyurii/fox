import { Pipe, PipeTransform } from '@angular/core';
import { CommonUtils } from '@common/utils';

@Pipe({ name: 'commonFilter' })
export class CommonFilterPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} mainArr
   * @param {string} searchText
   * @param {string} property
   * @returns {any}
   */
  transform(mainArr: any[], searchText: string, property: string): any {
    return CommonUtils.filterArrayByString(mainArr, searchText);
  }
}
