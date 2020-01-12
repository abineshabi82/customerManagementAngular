import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { CustomersServiceService } from './customers-service.service';
import { Observable, Subscription } from 'rxjs';
@Injectable()
export class MapDataService {
  
  
private mapDataSource=new BehaviorSubject<CustomersServiceService>(null);
currentMapData=this.mapDataSource.asObservable();
  constructor() { }

  changeMapData(mapData:CustomersServiceService){
    this.mapDataSource.next(mapData);
  }

}
