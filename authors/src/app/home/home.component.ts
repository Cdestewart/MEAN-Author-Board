import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  AuthorInfo: any;
  constructor(private _httpService: HttpService) { }
  
  ngOnInit() {
    this.showAll()
    
  }
  showAll(){
    console.log("SHOW all HOME COMPONENT")
    let observer = this._httpService.showAll();
    observer.subscribe(data=>this.AuthorInfo=data);
  }
  deleteAuthor(id){
    let observable = this._httpService.deleteAuthor(id);
    observable.subscribe(data=>console.log("delete Author"))
    this.showAll();
  }
}
