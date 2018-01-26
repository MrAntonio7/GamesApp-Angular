import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SharedService {
  private valueStyle = new Subject<any>();
  public value$ = this.valueStyle.asObservable();
  theme: any;

  private datosPlataformas = new Subject<any>();
  public plataformas$ = this.datosPlataformas.asObservable();
  plataformas: any;

  constructor() { }

  setVal(data) {
    this.valueStyle.next(data);
    this.theme = data;
  }

  savePlataforms(arrayPlataformas){
    this.plataformas = [];
    this.plataformas = arrayPlataformas;
  }

}
