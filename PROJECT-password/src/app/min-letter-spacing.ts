import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'minLetterSpacing'
})
export class MinLetterSpacingPipe implements PipeTransform {
  transform(value: string, args?: any): any {
    const size = 21;
    const minSize = 10;
    if (!value || !value.length || !(value.length > 8 && value.length < 17)) {
      return value && value.length && value.length > 16 ? minSize : size;
    }
    const newSize = size - ((value.length - 8) * 1.7);
    return newSize < minSize ? minSize : newSize;
  }
}
