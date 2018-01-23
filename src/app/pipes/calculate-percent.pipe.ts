import { Pipe, PipeTransform } from '@angular/core';
import { differenceInCalendarDays } from 'date-fns';
import { FlowDTO } from '../app.component';

@Pipe({
  name: 'calculatePercent'
})
export class CalculatePercentPipe implements PipeTransform {
  transform(array: Array<FlowDTO>): number {
    var d1 = new Date();
  var count=  array.filter(function(value){
      var d3 = new Date(value.DATE);
      var result = differenceInCalendarDays(d1, d3);
      console.log("result" +result);
      return result===0;
    }).length;

    return (Math.ceil((count/26)*100));
   
 
  }

}
