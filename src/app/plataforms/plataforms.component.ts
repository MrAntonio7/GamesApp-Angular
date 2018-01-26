import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { RequestService } from './../request.service';
import { FormControlDirective } from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import { SearchFilterPipe } from '../searchfilter.pipe';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-plataforms',
  templateUrl: './plataforms.component.html',
  styleUrls: ['./plataforms.component.css'],
  providers: [SearchFilterPipe]
})
export class PlataformsComponent implements OnInit {
  min: number = 1960;
  x: number = 1990;
  max: number = 2020;
  resp_plataformas: any = [];
  plataformas: any = [];
  bool: any = 'none';
  plataforma: any;
  baseUrl: any = 'http://thegamesdb.net/banners/';
  filter: any;
  constructor(private _servicio: RequestService, private _shared: SharedService, public search: SearchFilterPipe) { }
  valueStyle: any;
  classButton: any = 'btn-primary';
  ngOnInit() {

    this.valueStyle = this._shared.theme;
    this.setThemeButtons();
    this._shared.value$.subscribe(data => {this.valueStyle = data;
    this.setThemeButtons();
    })

    this.filter = '';
    this.bool = 'block';
    this.getPlataforms();

  }

  getPlataforms() {
    this._servicio.getPlataformas().subscribe((resp: any) => {
      this.resp_plataformas = this._servicio.parsetoJson(resp);
      this.resp_plataformas = this.resp_plataformas.Data.Platforms.Platform;
      console.log(this.resp_plataformas);
      for (let i = 0; i < this.resp_plataformas.length; i++) {
        this.getPlataform(this.resp_plataformas[i].id);
      }
      this.bool = 'none';

  })
  }


  getPlataform(id: any) {
    this._servicio.getPlataforma(id).subscribe((resp: any) => {
      this.plataforma = this._servicio.parsetoJson(resp);
      this.plataformas.push(this.plataforma);
      this._shared.savePlataforms(this.plataformas);
      this.plataformas = this.search.transform(this.plataformas, '');
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
      this.classButton = 'btn-primary';
    }else if (this.valueStyle == 'Xbox') {
      this.classButton = 'btn-success';
    }else if (this.valueStyle == 'Nintendo') {
      this.classButton = 'btn-danger';
    }
  }
}
