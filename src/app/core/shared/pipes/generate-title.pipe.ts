import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generateTitle'
})
export class GenerateTitlePipe implements PipeTransform {

  transform(value: string): string {
    const words = value.split(' ');
    let result = '';
    for (let i = 0; i < 3; i++) {
      if (words[i]) {
        result += `${words[i]} `;
      }
    }
    return result;
  }

}
