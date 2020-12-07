import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchesService } from 'src/app/services/matche.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users:any;
  matches:any;
  constructor
  (private matchService:MatchesService,
    private router:Router
    ) { }

    ngOnInit(): void {
      this.getMatches();
     
    }
    getMatches(){
      this.matchService.getAllMatches().subscribe(
        data => {
          this.matches = data.matches;
        }
      );
    }
    Delete(id:string) {
      this.matchService.DeleteMatch(id).subscribe(
        () => {
          
          this.getMatches();
        }
      )
    }

  displayID(id:number) {
    alert(id);
  }
  edit(id:any){
    this.router.navigate([`editMatch/${id}`]);
  }
  display(id:any){
    this.router.navigate([`display-match/${id}`]);
  }

}
