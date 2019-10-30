import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl ='http://localhost:8283/RestAPI_emp/api';

  constructor(private httpService:HttpClient) { }



getEmployeesList():Observable<any>{
  return this.httpService.get(environment.baseUrl+'/empdetails');
  
  }


  createEmployee(employee: Object):Observable<any>{
    return this.httpService.post(this.baseUrl+'/insertemp',employee);
    }
  

// delete function//

deleteEmployee(id:number,employee: Employee):Observable<any>{
  return this.httpService.put(this.baseUrl+'/disableemp/'+id,employee);
}

//to get details of a particular emp by using id//
getEmployee(id: number):Observable<any>{
  return this.httpService.get(this.baseUrl+'/empbyid/'+id);

}

//update//
updateEmployee(id:number,employee:Employee):Observable<any>{
  return this.httpService.put(this.baseUrl+'/updateemp/'+id,employee);
}


}





