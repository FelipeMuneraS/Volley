import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AboutOfPage } from '../about-of/about-of.page';
import { Router } from '@angular/router';
@Component({
  selector: 'app-p-home',
  templateUrl: './p-home.page.html',
  styleUrls: ['./p-home.page.scss'],
})
export class PHomePage implements OnInit {
  isDisabled = true;
  constructor(private modalController: ModalController, private router: Router) { }

  ngOnInit() {
  }

  async aboutOfModal() {
    const modal = await this.modalController.create({
      component: AboutOfPage,
      componentProps: {
        modalCtrl: this.modalController
      }
    });
    return await modal.present();
  }

  newGame() {
    this.router.navigate(['/insert-players'], {
      queryParams: {
        team: 'red',
        teamNumber: '1'
      }
    });
  }

}
