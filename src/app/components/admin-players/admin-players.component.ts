import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-admin-players',
  templateUrl: './admin-players.component.html',
  styleUrls: ['./admin-players.component.css']
})
export class AdminPlayersComponent implements OnInit {
players:any;
  constructor(private playerService:PlayerService) { }

  ngOnInit(): void {
    this.playerService.getAllPlayers().subscribe(
      data => {
        this.players = data;
      }
    )
  }

}
