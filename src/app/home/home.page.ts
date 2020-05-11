import { Component } from '@angular/core';
import { ScoreService } from '../score.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private scoreService: ScoreService) {}

  backButton() {
    this.scoreService.backwardScore();
  }

  fordwardButton() {
    this.scoreService.fordwardScore();
  }

}
