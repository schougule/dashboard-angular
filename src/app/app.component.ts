import { Component, ChangeDetectorRef } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { DbServiceService } from './service/db-service.service';
import { differenceInCalendarDays, format } from 'date-fns'
import { nextTick } from 'q';

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
    this.service.getOfssaDetails().subscribe({
      next : (value) =>{
          this.ofssaData=value;
            }
        
     }
     )

    this.service.getUnhappyDetails().subscribe({
      next : (value) =>{
          this.unhappyData=value;
            }
        
     }
     )

    this.service.getVldatDetails().subscribe({
      next : (value) =>{
          this.vlDatData=value;
            }
        
     }
     )

     this.service.getParentDetails().subscribe({
      next : (value) =>{
          this.parentData=value;
          console.log("lenghth" +this.parentData.length +this.vlDatData.length);
          for(var i=0;i<this.parentData.length;i++){
            
            this.parentData[i].VLDAT=this.vlDatData[i].DATE;
			   this.parentData[i].Unhappy=this.unhappyData[i].DATE;
			      this.parentData[i].OFSAA=this.ofssaData[i].DATE;
            }
            }
        
     }
     )
   

   

  }
  }
  


export class DashboardDTO {

  EOD_flow: string;
  Calendar: string;
  Ofsset: string;
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




  
  
  
