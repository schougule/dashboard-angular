import { Pipe, PipeTransform } from '@angular/core';
import { FlowDTO } from '../app.component';
import { differenceInCalendarDays } from 'date-fns';

@Pipe({
  name: 'pieData'
})
export class PieDataPipe implements PipeTransform {

  transform(array: Array<FlowDTO>): Array<number> {
    var d1 = new Date();
  var count=  array.filter(function(value){
      var d3 = new Date(value.DATE);
      var result = differenceInCalendarDays(d1, d3);
      console.log("result" +result);
      return result===0;
    }).length;

    var firstValue= (Math.ceil((count/26)*100));
    console.log(firstValue)
    var secondValue =100-firstValue;

    var dataset =[firstValue,secondValue];
     console.log(dataset);
    return dataset;
 
  }

}
