import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../teams.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-servicing',
  templateUrl: './select-servicing.page.html',
  styleUrls: ['./select-servicing.page.scss'],
})
export class SelectServicingPage implements OnInit {

  isSelected = false;
  teamServicingName = null;
  constructor(private teamsService: TeamsService, private router: Router) { }

  ngOnInit() {
  }

  select(team) {
    this.teamsService.servicingTeam = team;
    this.isSelected = true;
  }

  random() {
    this.teamsService.servicingTeam = (Math.random() > 0.5) ? 'red' : 'blue';
    this.isSelected = true;
  }

  next() {
    this.router.navigate(['/insert-rotation'], {
      queryParams: {
        team: 'red',
        teamName: this.teamsService.teamName.red
      }
    });
  }

}
