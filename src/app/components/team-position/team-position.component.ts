import { Component, OnInit, Input } from '@angular/core';
import { TeamsService } from 'src/app/teams.service';
import { ScoreService } from 'src/app/score.service';

@Component({
  selector: 'app-team-position',
  templateUrl: './team-position.component.html',
  styleUrls: ['./team-position.component.scss'],
})
export class TeamPositionComponent implements OnInit {

  @Input() team: string;
  teamRed = [];
  teamBlue = [];
  constructor(private teamService: TeamsService, private scoreService: ScoreService) { }

  ngOnInit() {
  }

}
