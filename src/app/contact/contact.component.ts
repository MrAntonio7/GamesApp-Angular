import { Component, OnInit } from '@angular/core';
import { ChatbotService } from '../chatbot.service';
import { SharedService } from '../shared.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  chatMensajes: any[] = [];
  valueStyle: any;
  classButton: any = 'btn-primary';
  visible = 'none';
  constructor(private _bot: ChatbotService, private _shared: SharedService) {

   }

  ngOnInit() {
    this.valueStyle = this._shared.theme;
    this.setThemeButtons();
    this._shared.value$.subscribe(data => {this.valueStyle = data;
    this.setThemeButtons();
    })
  }

  clearInput(msg: NgForm) {
    msg.resetForm();
  }

  chat(msg) {
    this.visible = 'block';
    this._bot.getChat(msg.value.msg).subscribe((resp: any) => {
      this.chatMensajes.push([msg.value.msg, resp]);
      this.visible = 'none';
      this.clearInput(msg);
      window.scrollTo(0, document.body.scrollHeight);
  });
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
