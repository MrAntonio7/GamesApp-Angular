import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { provideRoutes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlataformsComponent } from './plataforms/plataforms.component';
import { GamesComponent } from './games/games.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PlataformComponent } from './plataform/plataform.component';
import { GameComponent } from './game/game.component';

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'plataforms', component: PlataformsComponent },
  { path: 'games', component: GamesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'plataform/:id', component: PlataformComponent },
  { path: 'game/:id', component: GameComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home'} ,
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(ROUTES, { useHash: true }), CommonModule],
  declarations: []
})
export class AppRoutingModule {}
