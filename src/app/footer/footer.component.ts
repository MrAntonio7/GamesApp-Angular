import { Component, OnInit, Input, Directive } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  valueStyle: any;

  fondoPlaystation :any = '#004877';
  fondoXbox :any = '#056d05';
  fondoNintendo :any = '#D20014';
  fondo: any = this.fondoPlaystation;

  constructor(private _shared: SharedService) {
  }

  setTheme() {
    if (this.valueStyle == 'Playstation') {
      this.fondo = this.fondoPlaystation;
    }else if (this.valueStyle == 'Xbox') {
      this.fondo = this.fondoXbox;
    }else if (this.valueStyle == 'Nintendo') {
      this.fondo = this.fondoNintendo;
    }
  }

  ngOnInit() {
    this._shared.value$.subscribe(data => {this.valueStyle = data;
      this.setTheme();
    }

    );

  }

}
