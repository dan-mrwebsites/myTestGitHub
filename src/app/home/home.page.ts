import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    console.log('HomePage ngOnInit');
  }

  ionViewDidEnter() {
    console.log('HomePage ionViewDidEnter');
  }

  openSecond() {
    console.log('HomePage openSecond');
    this.router.navigate(['/second']);
  }

  openThird() {
    console.log('HomePage openThird');
    this.router.navigate(['/third']);
  }

}
