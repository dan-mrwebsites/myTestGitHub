import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    console.log('SecondPage ngOnInit');
  }

  ionViewDidEnter() {
    console.log('SecondPage ionViewDidEnter');
  }

  openHome() {
    console.log('SecondPage openHome');
    this.router.navigate(['/home']);
  }

  openThird() {
    console.log('SecondPage openThird');
    this.router.navigate(['/third']);
  }

}
