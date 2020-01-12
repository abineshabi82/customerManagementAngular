import { Component } from '@angular/core';
import { CustomersServiceService } from './customers-service.service';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  searchContent='';
  /* search(event:any){
    this.searchContent=event.target.value;
  } */

  constructor(private data:SearchService) { }

  ngOnInit() {
    this.data.searchData.subscribe(mapData=>this.searchContent=mapData);
  }

  getSearchContent(){
  this.data.changeSearchData(this.searchContent);
}

  }
