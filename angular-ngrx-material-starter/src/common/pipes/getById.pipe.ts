import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getById',
  pure: false
})
export class GetByIdPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param  value
   * @param  id
   * @param  property
   * @returns {any}
   */
  transform(value: any[], id: any, property: string): any {
    const foundItem = value.find((item) => {
      if (item.id !== undefined) {
        return item.id === id;
      }

      return false;
    });

    if (foundItem) {
      return foundItem[property];
    }
  }
}
