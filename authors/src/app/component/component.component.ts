import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Route, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {
  AuthorInfo:any;
  messages={Author:{message:""},Quote:{message:""}};
  constructor(private _httpService: HttpService,private _route: ActivatedRoute, private _router: Router) { }
  
  ngOnInit() {
    this.AuthorInfo = {Author:"",Quote:""}
  }
  addAuthor(){
    let observable = this._httpService.addAuthor(this.AuthorInfo);
    observable.subscribe(data=>{
      if (data["_message"]){
        this.messages=data["errors"];  
        console.log("error",data,"mess",data["errors"].Author.message)
      }
      else{
        this.AuthorInfo ={Author:"",Quote:""};
      this._router.navigate(['/home']);
      }
      
    })
    
  }
}
