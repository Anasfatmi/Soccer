import { Component, OnInit } from '@angular/core';
import { MatchesService } from 'src/app/services/matche.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  // variable globale
  matches:any;
  constructor(private matchesService:MatchesService) { }

  ngOnInit() {
    this.matchesService.getAllMatches().subscribe(
     
      data => {
        this.matches = data.matches;
    
  }
  );

  
}

}

