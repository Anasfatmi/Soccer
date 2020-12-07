import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchesService } from 'src/app/services/matche.service';

@Component({
  selector: 'app-display-match',
  templateUrl: './display-match.component.html',
  styleUrls: ['./display-match.component.css']
})
export class DisplayMatchComponent implements OnInit {
id:any;
match:any;

  constructor(
    private activatedRoute:ActivatedRoute,
    private matchService:MatchesService
  ) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.matchService.getMatchByID(this.id).subscribe(
      data => {
        this.match=data.match;
      }
    )
  }

}
