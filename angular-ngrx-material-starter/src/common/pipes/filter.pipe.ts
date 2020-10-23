import { Pipe, PipeTransform } from '@angular/core';
import { Utils } from 'src/common/utils';

@Pipe({ name: 'Filter' })
export class FilterPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param  mainArr
   * @param  searchText
   * @param  property
   * @returns
   */
  transform(mainArr: any[], searchText: string, property: string): any {
    return Utils.filterArrayByString(mainArr, searchText);
  }
}
