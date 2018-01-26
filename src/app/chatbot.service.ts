import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ChatbotService {
  proxy: string = 'https://cors-anywhere.herokuapp.com/';
  constructor(public http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({ 'Content-Type': 'text' });
    headers.append('Accept', 'text');
    headers.append('Content-Type', 'text');
    return headers;
  }

  getChat(msg: any) {
    let url = `${this.proxy}http://mydemos.in/chatbot/index.php?msg=${msg}`;
    let headers = this.getHeaders();
    return this.http.get(url, { responseType: 'text' });
    }

}
