import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServiceComponent } from './components/service/service.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { WordCupComponent } from './components/word-cup/word-cup.component';
import { ScoreComponent } from './components/score/score.component';
import { NewsComponent } from './components/news/news.component';
import { InfosComponent } from './components/infos/infos.component';
import { VideosComponent } from './components/videos/videos.component';
import { BlogComponent } from './components/blog/blog.component';
import { NewComponent } from './components/new/new.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AdminComponent } from './components/admin/admin.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerComponent } from './components/player/player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatcheComponent } from './components/matche/matche.component';
import { UsersComponent } from './components/users/users.component';
import { AdminMatchesComponent } from './components/admin-matches/admin-matches.component';
import { AdminPlayersComponent } from './components/admin-players/admin-players.component';
import { InMemoryWebApiModule } from "angular-in-memory-web-api";  
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { StadiumComponent } from './stadium/stadium.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ServiceComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    SignupComponent,
    WordCupComponent,
    ScoreComponent,
    NewsComponent,
    InfosComponent,
    VideosComponent,
    BlogComponent,
    NewComponent,
    MatchesComponent,
    AdminComponent,
    PlayersComponent,
    PlayerComponent,
    MatcheComponent,
    UsersComponent,
    AdminMatchesComponent,
    AdminPlayersComponent,
    AddMatchComponent,
    AddPlayerComponent,
    EditMatchComponent,
    DisplayMatchComponent,
    StadiumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, 
    AppRoutingModule,
    // InMemoryWebApiModule.forRoot(DataService),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
