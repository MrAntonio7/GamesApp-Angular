import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';
import { RequestService } from './../request.service';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';

@Component({
  selector: 'app-plataform',
  templateUrl: './plataform.component.html',
  styleUrls: ['./plataform.component.css']
})
export class PlataformComponent implements OnInit {
  plataforma: any;
  plataforma_resp: any;
  baseUrl: any = 'http://thegamesdb.net/banners/';
  bool: boolean = false;
  visible: any = 'none';
  nota: any;
  rating: any[] = []
  rating_vacio: any[] = [];
  valueStyle: any;
  classBadget: any = 'badge-primary';
  classText: any = 'text-primary';
  classButtonOut: any = 'btn-outline-primary';
  desplegable: any = false;
  constructor(private activateRoute: ActivatedRoute, private _request: RequestService, private _shared: SharedService) { }

  ngOnInit() {

    this.visible = 'block';
    this.activateRoute.params
    .map (params => params['id'])
    .subscribe(params => {
      // console.log(params);
      this._request.getPlataforma(params).subscribe((data: any) => {
        this.plataforma_resp = this._request.parsetoJson(data);
        this.plataforma = this.plataforma_resp.Data.Platform;
        console.log(this.plataforma);
        this.bool = true;
        this.visible = 'none';
        this.setRating(Math.round(this.plataforma.Rating));
      })
    });


    this.valueStyle = this._shared.theme;
    this.setThemeButtons();
    this._shared.value$.subscribe(data => {this.valueStyle = data;
    this.setThemeButtons();
    })
  }

  setRating(n = 0){
    this.nota = n;
    for (let i = 0; i < 10; i++) {
      this.rating.push(false);
    }
    this.rating.splice(0, n);
    for (let k = 0; k < this.rating.length; k++){
      this.rating_vacio.push(true);
    }
    for (let j = 0; j < n; j++) {
      this.rating.push(true);
    }
    this.rating = this.rating.reverse();
  }

  setImage(consola: any){
    if(consola == undefined){
      return 'assets/img/noimage.png';
    }else{
      return this.baseUrl + consola;
    }
  }

  setThemeButtons() {
    if (this.valueStyle == 'Playstation') {
      this.classButtonOut = 'btn-outline-primary';
      this.classBadget = 'badge-primary';
      this.classText = 'text-primary';
    }else if (this.valueStyle == 'Xbox') {
      this.classButtonOut = 'btn-outline-success';
      this.classBadget = 'badge-success';
      this.classText = 'text-success';
    }else if (this.valueStyle == 'Nintendo') {
      this.classButtonOut = 'btn-outline-danger';
      this.classBadget = 'badge-danger';
      this.classText = 'text-danger';
    }
  }
}

