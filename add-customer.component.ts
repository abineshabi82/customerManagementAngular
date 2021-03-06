import { Component, OnInit } from '@angular/core';
import { CusService } from '../cus.service';
import { ICustomer } from '../cusModel';
import { CustomersServiceService } from '../customers-service.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  //customer:ICustomer;
  
  constructor(private cus:CusService,private customer:CustomersServiceService) { }

  ngOnInit() {
    
  }
  addCustomer():void{
    this.cus.addCustomer(this.customer)
    .subscribe((response)=>{console.log(response)},
                (error)=>{console.log(error)});
              
  }
}

