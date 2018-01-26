import { Component, EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  theme: any;
  setTheme($event) {
    this.theme = $event;
  }
}
