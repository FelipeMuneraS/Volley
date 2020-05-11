import { Component, OnInit, Input } from '@angular/core';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-change-libero',
  templateUrl: './change-libero.page.html',
  styleUrls: ['./change-libero.page.scss'],
})
export class ChangeLiberoPage implements OnInit {

  @Input() team: string;
  @Input() modalCtrl;
  playerSelected = null;
  constructor(private teamsService: TeamsService) { }

  ngOnInit() {
  }

  changeLibero() {
    if (this.playerSelected !== null && this.playerSelected !== undefined) {
      this.teamsService.changeLibero(this.team, this.playerSelected);
      this.modalCtrl.dismiss({
        dismissed: true
      });
    }
  }

  exit() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}
