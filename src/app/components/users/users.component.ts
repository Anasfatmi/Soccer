import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users: any;
  constructor() { }

  ngOnInit() {
    this.users = [
      {id:1, nom: 'Masmoudi', prenom: 'Abderrahmen', email: 'a@a.aa'},
      {id:2, nom: 'Salah', prenom: 'Ali', email: 'a@a.aa'},
      {id:3, nom: 'Ben Ali', prenom: 'Ali', email: 'a@a.aa'},
    ]
  }

}
