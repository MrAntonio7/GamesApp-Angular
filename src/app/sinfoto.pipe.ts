import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(value: any[]): any {
    let noimage = 'assets/img/noimage.png';

    if (!value == undefined){
      return noimage;
    }

    // return (value.length > 0)? value[1].url : noimage;
  }

}