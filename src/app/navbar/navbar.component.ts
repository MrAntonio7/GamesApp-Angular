import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Theme } from '../theme';
import { AppComponent } from '../app.component';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']

})
export class NavbarComponent implements OnInit {

  themePlaystation: Theme = {
    logo: 'assets/img/logo-playstation.png',
    backgroundNav: '#004877',
    backgroundPag: '#000',
    colorLetra: '#fff',
  };

  themeXbox: Theme = {
    logo: 'assets/img/logo-xbox.png',
    backgroundNav: '#056d05',
    backgroundPag: '#C1C0C2',
    colorLetra: '#fff'
  };

  themeNintendo: Theme = {
    logo: 'assets/img/logo-nintendo.png',
    backgroundNav: '#D20014',
    backgroundPag: '#fff',
    colorLetra: '#fff'
  };



  public valueStyle: any = 'Playstation';

  logo: any = this.themePlaystation.logo;
  fondoNav: any = this.themePlaystation.backgroundNav;
  fondoPag: any = this.themePlaystation.backgroundPag;
  colorLetra: any = this.themePlaystation.colorLetra;

  constructor(private _shared: SharedService) { }

  ngOnInit() {
  }

  setThemePlaystation() {
    this.logo = this.themePlaystation.logo;
    this.fondoNav = this.themePlaystation.backgroundNav;
    this.fondoPag = this.themePlaystation.backgroundPag;
    this.colorLetra = this.themePlaystation.colorLetra;
  }

  setThemeXbox() {
    this.logo = this.themeXbox.logo;
    this.fondoNav = this.themeXbox.backgroundNav;
    this.fondoPag = this.themeXbox.backgroundPag;
    this.colorLetra = this.themeXbox.colorLetra;
  }

  setThemeNintendo() {
    this.logo = this.themeNintendo.logo;
    this.fondoNav = this.themeNintendo.backgroundNav;
    this.fondoPag = this.themeNintendo.backgroundPag;
    this.colorLetra = this.themeNintendo.colorLetra;
  }

  setTheme(theme) {
    this.valueStyle = theme;

    if (this.valueStyle == 'Playstation') {
      this.setThemePlaystation();

    } else if (this.valueStyle == 'Xbox') {
      this.setThemeXbox();

    } else if (this.valueStyle == 'Nintendo') {
      this.setThemeNintendo();
    }
    this._shared.setVal(this.valueStyle);
  }

}
