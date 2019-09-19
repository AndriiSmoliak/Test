import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'minFontSize'
})
export class MinFontSizePipe implements PipeTransform {
  transform(value: string, args?: any): any {
    const size = 22;
    const minSize = 12;
    if (!value || !value.length || !(value.length > 8 && value.length < 17)) {
      return value && value.length && value.length > 16 ? minSize : size;
    }
    const newSize = size - ((value.length - 8) * 2.8);
    return newSize < minSize ? minSize : newSize;
  }
}
