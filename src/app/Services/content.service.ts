import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { content2EX, contentEX, homeliving } from '../Interfaces/contentEx';
@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  
  private _url:string="./assets/Data/content.json";
  private _url2:string="./assets/Data/content2.json";
  private _url3:string="./assets/Data/homeliving.json";
  private _url4:string="./assets/Data/weddingparty.json";
  private _url5:string="./assets/Data/clothingshoes.json";
  private _url6:string="./assets/Data/jewelraccessories.json";

 
  GetAllProducts():Observable<contentEX[]>
  {

    return this.http.get<contentEX[]>(this._url);
  }
  GetAllProducts2():Observable<content2EX[]>
  {

    return this.http.get<content2EX[]>(this._url2);
  }
  GetAllProducts3():Observable<homeliving[]>
  {

    return this.http.get<homeliving[]>(this._url3);
  }
  GetAllProducts4():Observable<homeliving[]>
  {

    return this.http.get<homeliving[]>(this._url4);
  }
  GetAllProducts5():Observable<homeliving[]>
  {

    return this.http.get<homeliving[]>(this._url5);
  }
  GetAllProducts6():Observable<homeliving[]>
  {

    return this.http.get<homeliving[]>(this._url6);
  }
  
  
}
