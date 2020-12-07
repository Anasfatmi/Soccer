import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  matcheUrl = 'http://localhost:3000' ;


  constructor(private y:HttpClient) { }
  getAllMatches() {
    
    return this.y.get<{message:string,matches:any}>(`${this.matcheUrl}/allMatches`);

  }
  DeleteMatch(id:string) {
    return this.y.delete(`${this.matcheUrl}/deleteMatch/${id}`);
  }

  addMatch(match:any , image:File){
    let formData = new FormData();
    formData.append('teamOne',match.teamOne)
    formData.append('teamTwo',match.teamTwo)
    formData.append('scoreOne',match.scoreOne)
    formData.append('scoreTwo',match.scoreTwo)
    formData.append('image',image)
    return this.y.post(`${this.matcheUrl}/addMatch`,formData) ;
  }
  editMatch(match:any) {
    return this.y.put(`${this.matcheUrl}/editMatch/${match._id}`,match);

  }
  getMatchByID(id:any){
    return this.y.get<{match:any}>(`${this.matcheUrl}/displayMatch/${id}`);
  }
 
}
