import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-of',
  templateUrl: './about-of.page.html',
  styleUrls: ['./about-of.page.scss'],
})
export class AboutOfPage implements OnInit {

  @Input() modalCtrl;

  constructor() { }

  ngOnInit() {
  }

  exit() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}
