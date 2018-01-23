import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DbServiceService } from './service/db-service.service';
import {HttpClientModule} from '@angular/common/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CalculatePercentPipe } from './pipes/calculate-percent.pipe';
import { DateValidationPipe } from './pipes/date-validation.pipe';
import { PieDataPipe } from './pipes/pie-data.pipe';



@NgModule({
  declarations: [AppComponent,DateValidationPipe, CalculatePercentPipe, PieDataPipe],
  imports: [  
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ChartsModule

  ],
  bootstrap: [AppComponent],
  providers:[DbServiceService]
})
export class AppModule { } 
