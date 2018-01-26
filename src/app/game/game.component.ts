import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';
import { RequestService } from './../request.service';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  game: any;
  game_resp: any;
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
      this._request.getGameInfo(params).subscribe((data: any) => {
        this.game_resp = this._request.parsetoJson(data);
        this.game = this.game_resp.Data.Game;
        console.log(this.game);
        this.bool = true;
        this.visible = 'none';
      })
    });


    this.valueStyle = this._shared.theme;
    this.setThemeButtons();
    this._shared.value$.subscribe(data => {this.valueStyle = data;
    this.setThemeButtons();
    })
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
