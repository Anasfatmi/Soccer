import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchesService } from 'src/app/services/matche.service';

@Component({
  selector: 'app-admin-matches',
  templateUrl: './admin-matches.component.html',
  styleUrls: ['./admin-matches.component.css']
})
export class AdminMatchesComponent implements OnInit {
matches:any;
  constructor( 
    private matchService:MatchesService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.getMatches();
   
  }
  getMatches(){
    this.matchService.getAllMatches().subscribe(
      data => {
        this.matches = data;
      }
    );
  }
  Delete(id:any) {
    this.matchService.DeleteMatch(id).subscribe(
      () => {
        
        this.getMatches();
      }
    )
  }

}
