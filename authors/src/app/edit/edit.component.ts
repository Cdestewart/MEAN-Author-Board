import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  singleAuthorVariable= {Author:"",Quote:"",_id:""};
  id:any;
  message={Author:{message:""},Quote:{message:""}};
  constructor(private _httpService:HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.singleAuthor();
  }
  singleAuthor(){
    this._route.params.subscribe(params => {
    this.id=params
    console.log(this.id.id)
  })
  let observable = this._httpService.editAuthor(this.id.id);
  observable.subscribe(data=>{console.log("DATA",data);this.singleAuthorVariable=data[0]})  
  console.log("singleAuthor",this.singleAuthorVariable);
  }
  updateAuthor(){
    console.log("UPDATE AUTHOR IN COMPONENTS")
    console.log("single",this.singleAuthorVariable)
    let observable = this._httpService.updateAuthor(this.singleAuthorVariable._id,this.singleAuthorVariable);
    observable.subscribe(data=>{
    if (data["errors"]){
      if(data["errors"].Quote){
        this.message.Quote.message=data["errors"].Quote.message;  
      }
      if(data["errors"].Author){
        this.message.Author.message=data["errors"].Author.message;  
      }
    }
    else{
      
    this._router.navigate(['/home']);
    }
    
  })
    
  }

}
