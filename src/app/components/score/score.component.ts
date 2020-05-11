import { Component, OnInit, Input } from '@angular/core';
import { ScoreService } from 'src/app/score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {

@Input() score: string;
@Input() color: string;
colorBoolean = false;
  constructor(private scoreService: ScoreService) { }

  ngOnInit() {
  }

  teamUp() {
    this.scoreService.upScore(this.color);
  }

}
