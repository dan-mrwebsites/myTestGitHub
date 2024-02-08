import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-third',
  templateUrl: './third.page.html',
  styleUrls: ['./third.page.scss'],
})
export class ThirdPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    console.log('ThirdPage ngOnInit');
  }

  ionViewDidEnter() {
    console.log('ThirdPage ionViewDidEnter');
  }

  openHome() {
    console.log('ThirdPage openHome');
    this.router.navigate(['/home']);
  }

  openSecond() {
    console.log('ThirdPage openSecond');
    this.router.navigate(['/second']);
  }

}
