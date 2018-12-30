import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  defaultMaxCharacters = 20;

  transform(value: string, maxCharacters?: number): string {
    maxCharacters = maxCharacters ? maxCharacters : this.defaultMaxCharacters;

    if (value.length > maxCharacters) {
      value = `${value.substr(0, maxCharacters)}...`;
    }
    return value;
  }

}
