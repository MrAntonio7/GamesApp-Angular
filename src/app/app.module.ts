import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as $ from 'jquery';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from 'selenium-webdriver/http';
import { FormsModule } from '@angular/forms';

import { RequestService } from './request.service';
import { SharedService } from './shared.service';
import { ChatbotService } from './chatbot.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { AppRoutingModule } from './app-routing.module';
import { GamesComponent } from './games/games.component';
import { PlataformsComponent } from './plataforms/plataforms.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SinfotoPipe } from './sinfoto.pipe';
import { SearchFilterPipe } from './searchfilter.pipe';
import { PlataformComponent } from './plataform/plataform.component';
import { GameComponent } from './game/game.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    GamesComponent,
    PlataformsComponent,
    AboutComponent,
    ContactComponent,
    SinfotoPipe,
    SearchFilterPipe,
    PlataformComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RequestService, SharedService, ChatbotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
