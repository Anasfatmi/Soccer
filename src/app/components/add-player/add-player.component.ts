import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  player:any={};
  playerForm: FormGroup;
  constructor( private formBuilder:FormBuilder ,
    private playerService:PlayerService,
    private router:Router) { }

  ngOnInit(): void {
    this.playerForm= this.formBuilder.group({
      name :[''],
      dateOfBirth :[''],
      poste :['']
      
    })
   

  } 
  addplayer(){
    console.log('this is my match' , this.player);
    this.playerService.addplayer(this.player).subscribe(
      () => {
        console.log('player added successfully');
        this.router.navigate(['admin']);
        
      }
    )
    
  }
}
