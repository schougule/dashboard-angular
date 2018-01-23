import { Pipe, PipeTransform } from '@angular/core';
import { differenceInCalendarDays, format, parse } from 'date-fns';

@Pipe({
  name: 'dateValidation'
})
export class DateValidationPipe implements PipeTransform {
  transform(date: string): boolean {
    var d1 = new Date();
  console.log("date" +date)
    var d3 = new Date(date);
    var result = differenceInCalendarDays(d1, d3);
    console.log("dateValidation" + result);
    if (isNaN(result)) {
      console.log("isNAN");
      return false;
    }
    if (result ==0) {
      return true;
    }
    return false;
  }
}