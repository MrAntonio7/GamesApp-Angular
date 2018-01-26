import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  valueStyle: any;
  classButton: any = 'btn-primary';
  constructor(private _shared: SharedService) { }

  ngOnInit() {
    this.valueStyle = this._shared.theme;
    this.setThemeButtons();
    this._shared.value$.subscribe(data => {this.valueStyle = data;
    this.setThemeButtons();
    })
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
