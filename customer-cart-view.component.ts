import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import {CustomersServiceService} from '../customers-service.service';
import { OnChanges } from "@angular/core";

import { SimpleChange } from "@angular/core";
import { MapDataService } from '../map-data.service';
import { SearchService } from '../search.service';
import { CusService } from '../cus.service';
@Component({
  selector: 'app-customer-cart-view',
  templateUrl: './customer-cart-view.component.html',
  styleUrls: ['./customer-cart-view.component.css']
})
export class CustomerCartViewComponent implements OnInit,OnChanges {

  
  //cus:any=CusService.getCus();
  /* [new CustomersServiceService(1,'abi','silent',14.6835214,78.8567013),
  new CustomersServiceService(2,'vishal','knowlege',13.1519502,79.9231446),
  new CustomersServiceService(3,'ram','player',16.7376215,81.5743552),
  new CustomersServiceService(4,'guhan','gym',40.6976701,-74.2598758),
  new CustomersServiceService(5,'ganesh','coder',41.3689379,-74.9414565),
  new CustomersServiceService(6,'ajith','master',40.6976701,-74.2598758)]; */ 
  customers:CustomersServiceService[];
  mapData:CustomersServiceService;
  @Input() searchContent: string=null;
 
  constructor(private data:MapDataService,private searchdata:SearchService,private cus:CusService) { }
/* name() {
  if(this.searchContent!=null&&this.searchContent!=''){
    this.customers=null;
    this.customers=this.cus.filter(x=>x.name===this.searchContent);
  }else if(this.searchContent==''){
    this.customers=this.cus;
  }
} */
  ngOnInit() {
    console.log("init"); 
    this.data.currentMapData.subscribe(mapData=>this.mapData=mapData);
    this.searchdata.searchData.subscribe(x=>this.searchContent=x);
    this.cus.getCus().subscribe(x=>this.customers=x);
    //this.name();
  }

  ngOnChanges(searchContent: SimpleChanges) {
    //this.name();
    console.log(searchContent);
  }  

newMapData(customer:CustomersServiceService){
  console.log("method");
  this.data.changeMapData(customer);
}


}
