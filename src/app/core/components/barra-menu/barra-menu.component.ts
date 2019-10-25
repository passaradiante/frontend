import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-menu',
  templateUrl: './barra-menu.component.html',
  styleUrls: ['./barra-menu.component.css']
})
export class BarraMenuComponent implements OnInit {

  constructor(private route: Router) { }

  localStorage: any;

  ngOnInit() {
    this.localStorage = localStorage.getItem('token');
    console.log(this.localStorage)
  }

  logout() {
    localStorage.removeItem('token');
     this.route.navigate(['/'])
  }

}
