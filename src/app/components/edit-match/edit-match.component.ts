import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchesService } from 'src/app/services/matche.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  id:any;
  match:any={};
matchForm: FormGroup;
  constructor( 
    private formBuilder:FormBuilder,
    private matchService:MatchesService,
    private router:Router,
    private activated:ActivatedRoute
    ) { }

 
  ngOnInit(): void {
    //le module ActivatedRoute permet de snapshoter (capturer)
    //l'URL active et mapper pour faire retourner le paramètre ID
   this.id = this.activated.snapshot.paramMap.get('id');
   this.matchService.getMatchByID(this.id).subscribe(
     data => {
       this.match=data.match;
     }
   )
    this.matchForm= this.formBuilder.group({
      teamOne :[''],
      scoreOne :[''],
      teamTwo :[''],
      scoreTwo :['']
    })
  }
  editMatch(){
    this.matchService.editMatch(this.match).subscribe(
      () => {
        this.router.navigate(['admin']);
      }
    )
  }

}
