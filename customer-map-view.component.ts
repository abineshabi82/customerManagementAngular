import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomersServiceService } from '../customers-service.service';
import { MapDataService } from '../map-data.service';
import {} from 'googlemaps';
import { CusService } from '../cus.service';
@Component({
  selector: 'app-customer-map-view',
  templateUrl: './customer-map-view.component.html',
  styleUrls: ['./customer-map-view.component.css']
})
export class CustomerMapViewComponent implements OnInit {

  mapData:CustomersServiceService;
 
  constructor(private data:MapDataService,private cus:CusService) { }

  @ViewChild('map',{static: true}) mapElement: any;
  map: google.maps.Map;

  ngOnInit():void {
    this.data.currentMapData.subscribe(mapData=>this.mapData=mapData);
    const mapProperties = {
      center: new google.maps.LatLng(this.mapData.l1,this.mapData.l2),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
 };
 this.map = new google.maps.Map(this.mapElement.nativeElement,    mapProperties);
  }

  deleteCustomer(customer:CustomersServiceService){
    console.log(customer.id);
  this.cus.deleteCustomer(customer).subscribe((response)=>{console.log(response)},(error)=>{console.log(error)});
  }
}
