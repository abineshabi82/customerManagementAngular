import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICustomer } from './cusModel';
import { CustomersServiceService } from './customers-service.service';
import { catchError, map } from 'rxjs/operators';
@Injectable()
export class CusService {

  constructor(private http:HttpClient) {
    
   }

  public getCus():Observable<ICustomer[]>{
    return this.http.get<ICustomer[]>("http://localhost:9090/get/customers");
  }

  addCustomer(customer:ICustomer){
    let body=JSON.stringify(customer);
    let headers = new HttpHeaders({'Content-Type':'application/json'});
   let options = {headers: headers};
    return this.http.post<ICustomer>("http://localhost:9090/post/customer",body,options);
  }

  updateCustomer(customer: ICustomer) {
    let body=JSON.stringify(customer);
    let headers = new HttpHeaders({'Content-Type':'application/json'});
   let options = {headers: headers};
    return this.http.put<ICustomer>("http://localhost:9090/put/customer/"+customer.id,body,options);
  }

  deleteCustomer(customer:ICustomer){
    return this.http.delete<ICustomer>("http://localhost:9090/delete/customer/"+customer.id);
  }

}
