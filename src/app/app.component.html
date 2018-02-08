import { Component, ChangeDetectorRef } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { DbServiceService } from './service/db-service.service';
import { differenceInCalendarDays, format } from 'date-fns'
import { nextTick } from 'q';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {


  parentData: Array<DashboardDTO>=[];
  vlDatData: Array<FlowDTO>=[];
  unhappyData: Array<FlowDTO>=[];
  ofssaData: Array<FlowDTO>=[];
  

  private datasets = [
    {
      data:  [100],
      borderWidth:[0]
    }
  ];

  public pieChartLabels = ['VLDAT']
   public pieChartType:string = 'pie';
  
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {

    
    console.log(e);
  }

  constructor(private service: DbServiceService) {}

    
    
    
  ngAfterViewInit(){
   var ofssDateObservable =this.service.getOfssaDetails();
     

   var unhappyObservable =this.service.getUnhappyDetails();
     

     var vldatObservable= this.service.getVldatDetails();
     
     var parentObservale= this.service.getParentDetails();
    


     forkJoin(unhappyObservable,
       
       ofssDateObservable,
       vldatObservable,
       parentObservale)
       .subscribe(([res1, res2, res3,res4]) => {

        this.vlDatData =res3;
        this.unhappyData=res1;
        this.ofssaData=res2;
        this.parentData=res4;

        for(var i=0;i<this.parentData.length;i++){
          
          this.parentData[i].VLDAT=this.vlDatData[i].DATE;
       this.parentData[i].Unhappy=this.unhappyData[i].DATE;
          this.parentData[i].OFSAA=this.ofssaData[i].DATE;
          }
      
     
    });

    //  this.service.getParentDetails().subscribe({
    //   next : (value) =>{
    //       this.parentData=value;
    //       console.log("lenghth" +this.parentData.length +this.vlDatData.length);
    //       for(var i=0;i<this.parentData.length;i++){
            
    //         this.parentData[i].VLDAT=this.vlDatData[i].DATE;
		// 	   this.parentData[i].Unhappy=this.unhappyData[i].DATE;
		// 	      this.parentData[i].OFSAA=this.ofssaData[i].DATE;
    //         }
    //         }
        
    //  }
    //  )
   

   

  }
  }
  


export class DashboardDTO {

  EOD_flow: string;
  Calendar: string;
  WD_Ofsset: string;
  CD_Ofsset: string;
  File_set_cd: number;
  Draft: string;
  VLDAT: string;
  Unhappy: string;
  OFSAA: string;


}


export class FlowDTO {
  
    ORDO: number;
    DESCR: string;
    FLOW_ID: number;
    AREA: number;
    DATE: string;
      
  }




  
  
  
