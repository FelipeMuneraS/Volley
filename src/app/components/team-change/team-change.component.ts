import { Component, OnInit, Input } from '@angular/core';
import { TeamsService } from 'src/app/teams.service';
import { ModalController } from '@ionic/angular';
import { ChangeLiberoPage } from 'src/app/change-libero/change-libero.page';
import { ChangePlayerPage } from 'src/app/change-player/change-player.page';

@Component({
  selector: 'app-team-change',
  templateUrl: './team-change.component.html',
  styleUrls: ['./team-change.component.scss'],
})


export class TeamChangeComponent implements OnInit {

  @Input() team: string;
  constructor(private teamsService: TeamsService, private modalController: ModalController) { }

  ngOnInit() {
  }

  liberoButton() {
    let bool = false;
    let positionG = null;
    ['one', 'two', 'three', 'four', 'five', 'six'].forEach(position => {
      if (this.teamsService.playersTeam[this.team][position] === this.teamsService.playersTeam[this.team].liberoNumber) {
        bool = true;
        positionG = position;
      }
    });
    if (bool) {
      this.teamsService.changeLibero(this.team, positionG);
    } else {
      this.liberoModal();
    }
  }

  async liberoModal() {
    const modal = await this.modalController.create({
      component: ChangeLiberoPage,
      componentProps: {
        modalCtrl: this.modalController,
        team: this.team
      }
    });
    return await modal.present();
  }

  async changeButton() {
    const modal = await this.modalController.create({
      component: ChangePlayerPage,
      componentProps: {
        modalCtrl: this.modalController,
        team: this.team
      }
    });
    return await modal.present();
  }

}
