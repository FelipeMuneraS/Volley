import { Injectable } from '@angular/core';
import { TeamsService } from './teams.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  finish = 25;
  score = {
    blue: 0,
    red: 0
  };
  index = 0;
  historyScore = [];
  lastScore = true;
  constructor(
    private teamsService: TeamsService,
    private toastController: ToastController,
    private router: Router) { }


  upScore(team: string) {
    this.resetHistory();
    if (!this.isFinish(team)) {
      this.teamsService.rotate(team);
      this.historyScore.push(Object.assign({}, this.score));
      this.index++;
      this.score[team]++;
    }
    setTimeout(() => {
      ['red', 'blue'].forEach(teamColor => {
        if (this.isFinish(teamColor)) {
          this.presentToast(this.teamsService.teamName[teamColor]);
          setTimeout(() => {
            this.teamsService.resetService();
            this.resetService();
            this.router.navigate(['/p-home']);
          }, 3000);
        }
      });
    }, 300);


  }

  async presentToast(team: string) {
    const toast = await this.toastController.create({
      message: 'El juego termino, gano el equipo ' + team,
      duration: 2000
    });
    toast.present();
  }

  isFinish(team: string) {
    return this.score[team] + 1 > this.finish && (this.score[team] - this.score[this.otherTeam(team)]) > 1;
  }

  backwardScore() {
    if (this.lastScore) {
      this.historyScore.push(Object.assign({}, this.score));
      this.lastScore = false;
    }
    if (this.index - 1 >= 0) {
      this.index--;
      this.teamsService.backwardRotation();
      this.score = this.historyScore[this.index];
    }
  }

  fordwardScore() {
    if (this.index + 1 <= this.historyScore.length) {
      this.index++;
      this.score = this.historyScore[this.index];
      this.teamsService.fordwardRotation();
    }
  }

  resetHistory() {
    this.historyScore.splice(this.index);
    this.teamsService.resetHistory();
    this.lastScore = true;
  }

  otherTeam(team: string) {
    return (team === 'red') ? 'blue' : 'red';
  }

  resetService() {
    this.finish = 25;
    this.score = {
      blue: 0,
      red: 0
    };
    this.index = 0;
    this.historyScore = [];
    this.lastScore = true;
  }
}
