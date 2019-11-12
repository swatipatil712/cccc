import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptitle'
})
export class EmptitlePipe implements PipeTransform {

  transform(value: string, gender: string): string {
    if(gender.toLowerCase()=="female"){
      return "Ms. "+value;
    }
    else{
      return "Mr. "+value;
    }
  }

}
