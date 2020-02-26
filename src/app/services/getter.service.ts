import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetterService {

  constructor(private httpClient: HttpClient) { }

  getter(url){
    this.httpClient.get(url).subscribe(data =>{
     console.log(data);
      
    })
  }

}