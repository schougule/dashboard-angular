import {Directive, ElementRef, Renderer, Input, OnInit} from '@angular/core';
import { Element } from '@angular/compiler';
import { DashboardDTO } from '../app.component';
import { differenceInCalendarDays, getDay, isSameWeek } from 'date-fns';
import { concat } from 'rxjs/operator/concat';

@Directive({selector:'[dateHighlighter]'})
export class DateHighlighterDirective implements OnInit{

    @Input('dateHighlighter')
    date:string;

    @Input('wdOffset')
    wdOffset:string;

    @Input('cdOffset')
    cdOffset:string;
    

    constructor(private el:ElementRef, private renderer:Renderer){}
    ngOnInit(): void {
       var date = this.date;
       var wdOffset =parseInt(this.wdOffset);
       var cdOffset =parseInt(this.cdOffset);
        var d1 = new Date();
       console.log("date" +date +"wdOffset " +this.wdOffset + isNaN(wdOffset) +" cdOffset " +this.cdOffset +isNaN(cdOffset) );
          var d3 = new Date(date);
          var result = differenceInCalendarDays(d1, d3);
          console.log("dateValidation" + result);
          if (isNaN(result)) {
            console.log("isNAN");
            this.renderer.setElementStyle(this.el.nativeElement,'background-color','white');
          }
          if(!isNaN(cdOffset)){
          console.log("if block" +cdOffset)
            if (result <=cdOffset) {
                this.renderer.setElementStyle(this.el.nativeElement,'background-color','green');
            }else if(result<=5){
                this.renderer.setElementStyle(this.el.nativeElement,'background-color','yellow');
            }else{
                this.renderer.setElementStyle(this.el.nativeElement,'background-color','red');
            }
        }else{
            console.log("else block")
            //var dayofWeek =getDay(date);
            var sameWeek = isSameWeek(
                d3,
               d1,
                {weekStartsOn: 1}
              )
            if(sameWeek){

                if (result <=wdOffset) {
                    this.renderer.setElementStyle(this.el.nativeElement,'background-color','green');
                }else if(result<=5){
                    this.renderer.setElementStyle(this.el.nativeElement,'background-color','yellow');
                }else{
                    this.renderer.setElementStyle(this.el.nativeElement,'background-color','red');
                }

            }else{
                if ((result-2) <=wdOffset) {
                    this.renderer.setElementStyle(this.el.nativeElement,'background-color','green');
                }else if((result -2) <=5){
                    this.renderer.setElementStyle(this.el.nativeElement,'background-color','yellow');
                }else{
                    this.renderer.setElementStyle(this.el.nativeElement,'background-color','red');
                }


            }

        }
         
       
    }

    

    
}