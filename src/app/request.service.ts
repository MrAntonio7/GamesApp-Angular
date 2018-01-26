import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import * as $ from 'jquery';
// import 'rxjs/add/operator/map';
import X2JS from 'node-x2js/src/index';


@Injectable()


export class RequestService {
  proxy: string = 'https://cors-anywhere.herokuapp.com/';
  plataformas: any[] = [];
  xml2json: X2JS = new X2JS()
  constructor(public http: HttpClient) {}

   parsetoJson (xmlDoc: any) {
    let x2js = new X2JS();
    let jsonObj = x2js.xml_str2json(xmlDoc);
    return jsonObj;
   }

   private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({ 'Content-Type': 'text/xml' });
    headers.append('Accept', 'text/xml');
    headers.append('Content-Type', 'text/xml');
    return headers;
  }

  getPlataformas() {
    let url = `${this.proxy}http://thegamesdb.net/api/GetPlatformsList.php`;
    let headers = this.getHeaders();
    return this.http.get(url, { responseType: 'text' });
    }

  getPlataforma(id: any) {
    let url = `${this.proxy}http://thegamesdb.net/api/GetPlatform.php?id=${id}`;
    let headers = this.getHeaders();
    return this.http.get(url, { responseType: 'text' });
  }

  getGame(name: any) {
    if (name.length > 3){
    let url = `${this.proxy}http://thegamesdb.net/api/GetGame.php?name=${name}`;
    let headers = this.getHeaders();
    return this.http.get(url, { responseType: 'text' });}
  }
  getGameInfo(id: any) {
    let url = `${this.proxy}http://thegamesdb.net/api/GetGame.php?id=${id}`;
    let headers = this.getHeaders();
    return this.http.get(url, { responseType: 'text' });
  }


}
// http://thegamesdb.net/api/GetGame.php?id=50800
