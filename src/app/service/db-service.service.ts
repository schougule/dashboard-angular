import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import { DashboardDTO, FlowDTO } from '../app.component';
@Injectable()
export class DbServiceService {

  private parentUrl = 'http://localhost:5000/parent';
  private vldatUrl = 'http://localhost:5000/vldat';
  private unhappyUrl = 'http://localhost:5000/unhappy';
  private ofssaUrl = 'http://localhost:5000/ofssa';
   
    constructor(private http: HttpClient) {}
  
  getParentDetails() : Observable<Array<DashboardDTO>>{
      
     
    return this.http.get(this.parentUrl) 
    
     .catch(this.handleErrorObservable);
    
     
    }
    getVldatDetails() : Observable<Array<FlowDTO>>{
      
     
    return this.http.get(this.vldatUrl) 
    
     .catch(this.handleErrorObservable);
    
     
    }
    getUnhappyDetails() : Observable<Array<FlowDTO>>{
      
     
    return this.http.get(this.unhappyUrl) 
    
     .catch(this.handleErrorObservable);
    
     
    }
    getOfssaDetails() : Observable<Array<FlowDTO>>{
      
     
    return this.http.get(this.ofssaUrl) 
    
     .catch(this.handleErrorObservable);
    
     
    }
  
    private handleErrorObservable (err: HttpErrorResponse | any) {
      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.log('An error occurred:', err.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log('An error occurred:', err.message);
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
     
        }
        return Observable.throw( err.error.message);
  }
}
