import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  products:any;
  actualDate: Date
  constructor(private router:Router) { }
  ngOnInit() {
    // this.products = [
    //   {id:1, name: "A"},
    //   {id:2, name: "B"},
    //   {id:3, name: "C"},
    // ]
  }
  goToLogin() {
    this.router.navigate(['login']);
  }

  goToSignup() {
    this.router.navigate(['signup']);
  }
}
