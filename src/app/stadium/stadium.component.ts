import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchesService } from 'src/app/services/matche.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './stadium.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
match:any={};
matchForm: FormGroup;
imagePreview:any;
  constructor( 
    private formBuilder:FormBuilder ,
    private matchService:MatchesService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.matchForm= this.formBuilder.group({
      name :[''],
      country :[''],
      capacity :['']
      
    })
  }
  addMatch() {
    console.log('this is my match' , this.match);
    this.matchService.addMatch(this.match, this.matchForm.value.image).subscribe(
      () => {
        console.log('match added succeqqfully');
        this.router.navigate(['admin']);
        
      }
    )
    

  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.matchForm.patchValue({ image: file });
    this.matchForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }

}
