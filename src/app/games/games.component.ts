import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { RequestService } from './../request.service';
import { FormControlDirective } from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  game: any;
  i = 0;
  bool: any = 'none';
  classButton: any = 'btn-primary';
  valueStyle: any;
  baseUrl: any = 'http://thegamesdb.net/banners/';
  termino_buscado: string = '';
  constructor(private _servicio: RequestService, private _shared: SharedService) { }

  ngOnInit() {
    this.termino_buscado = '';
    this.bool = 'none';
    this.valueStyle = this._shared.theme;
    this.setThemeButtons();
    this._shared.value$.subscribe(data => {this.valueStyle = data;
    this.setThemeButtons();
    })
  }

  getGame(termino) {
      this.termino_buscado = termino.value.termino;
      this.bool = 'block';
      this._servicio.getGame(termino.value.termino).subscribe((resp: any) => {
      this.game = this._servicio.parsetoJson(resp);
      this.game = this.game.Data.Game;
      console.log(this.game);
      this.filter()
      this.bool = 'none';
  });
  }
  filter(){
    for (let i = 0; i < this.game.length; i++) {
      if (this.game[i].Images == false || this.game[i].Images.boxart == false || this.game[i].Images.boxart.__text == false){
        this.game.splice(i, 1);
  }}}

  setImage(img: any){
    if(img == undefined ){
      return 'assets/img/noimage.png';
    }else{
      return this.baseUrl + img;
    }
  }


  setThemeButtons() {
    if (this.valueStyle == 'Playstation') {
      this.classButton = 'btn-primary';
    }else if (this.valueStyle == 'Xbox') {
      this.classButton = 'btn-success';
    }else if (this.valueStyle == 'Nintendo') {
      this.classButton = 'btn-danger';
    }
  }

}
