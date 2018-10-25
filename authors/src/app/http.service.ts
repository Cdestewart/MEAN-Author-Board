import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  addAuthor(authorInfo){
    return this._http.post('/api/author',authorInfo)
  }
  showAll(){
    
    return this._http.get('/api/author')
  }
  editAuthor(id){
    console.log("EDIT HTTP SERVICE /author/",id)
    return this._http.get('/api/author/'+id)
  }
  updateAuthor(id,authorInfo){
    console.log(authorInfo)
    return this._http.put('/api/author/'+id,authorInfo);
  }
  deleteAuthor(id){
    console.log("DELTE aUTHOR",id)
    return this._http.delete('/api/author/'+id);
  }
}
