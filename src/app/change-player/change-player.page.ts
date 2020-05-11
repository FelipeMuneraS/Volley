import { Component, OnInit, Input } from '@angular/core';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-change-player',
  templateUrl: './change-player.page.html',
  styleUrls: ['./change-player.page.scss'],
})
export class ChangePlayerPage implements OnInit {

  @Input() team: string;
  @Input() modalCtrl;
  positionSelected = null;
  playerSelected = null;
  constructor(private teamsService: TeamsService) { }

  ngOnInit() {
  }

  changePlayer() {
    if (this.validate(this.positionSelected) &&
      this.validate(this.playerSelected)) {
      this.teamsService.changePlayer(this.team, this.positionSelected, this.playerSelected);
      this.modalCtrl.dismiss({
        dismissed: true
      });
    }
  }

  getPlayersIn() {
    const array = [];
    ['one', 'two', 'three', 'four', 'five', 'six'].forEach(position => {
      if (this.teamsService.playersTeam[this.team][position] !==
        this.teamsService.playersTeam[this.team].liberoNumber) {
        array.push(position);
      }
    });
    return array;
  }

  getPlayersOut() {
    const array = [];
    const arrayIn = [];
    this.getPlayersIn().forEach(position => {
      arrayIn.push(this.teamsService.playersTeam[this.team][position]);
    });
    this.teamsService.playersNumbers[this.team].forEach(playerNumber => {
      if (!arrayIn.includes(playerNumber)) {
        array.push(playerNumber);
      }
    });
    return array;
  }

  validate(valueString: string) {
    return (valueString !== null && valueString !== undefined);
  }

  exit() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}
