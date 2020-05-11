import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TeamsService } from '../teams.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-insert-rotation',
  templateUrl: './insert-rotation.page.html',
  styleUrls: ['./insert-rotation.page.scss'],
})
export class InsertRotationPage implements OnInit {

  @Input() teamName: string;
  @Input() team: string;
  teamNumbers = null;
  teamPositions = {
    one: null,
    two: null,
    three: null,
    four: null,
    five: null,
    six: null,
    libero: null
  };
  isEnabled = false;
  @ViewChild('positionOne', { static: false }) positionOne;
  @ViewChild('positionTwo', { static: false }) positionTwo;
  @ViewChild('positionThree', { static: false }) positionThree;
  @ViewChild('positionFour', { static: false }) positionFour;
  @ViewChild('positionFive', { static: false }) positionFive;
  @ViewChild('positionSix', { static: false }) positionSix;
  @ViewChild('positionLibero', { static: false }) positionLibero;
  constructor(
    private teamsService: TeamsService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.team = res.team;
      this.teamName = res.teamName;
    });
   }

  ngOnInit() {
  }

  openSelect(position: string) {
    this.getPlayersIn();
    switch (position) {
      case 'one': {
        this.positionOne.open();
        break;
      }
      case 'two': {
        this.positionTwo.open();
        break;
      }
      case 'three': {
        this.positionThree.open();
        break;
      }
      case 'four': {
        this.positionFour.open();
        break;
      }
      case 'five': {
        this.positionFive.open();
        break;
      }
      case 'six': {
        this.positionSix.open();
        break;
      }
      case 'libero': {
        this.positionLibero.open();
        break;
      }
      default: {
        break;
      }
    }
  }

  getPlayersIn() {
    this.teamNumbers = Object.assign([], this.teamsService.playersNumbers[this.team]);
    for (const position in this.teamPositions) {
      if (this.teamNumbers.includes(this.teamPositions[position])) {
        this.teamNumbers.splice(this.teamNumbers.indexOf(this.teamPositions[position], 0), 1);
      }
    }
    return this.teamNumbers;
  }

  setIsEnabled() {
    let bool = true;
    for (const position in this.teamPositions) {
      if (this.teamPositions[position] === null || this.teamPositions[position] === undefined) {
        bool = false;
      }
    }
    this.isEnabled = bool;
  }

  next() {
    if (this.team === 'red') {
      this.setPlayers();
      this.router.navigate(['/insert-rotation'], {
        queryParams: {
          team: 'blue',
          teamName: this.teamsService.teamName.blue
        }
      });
    } else if (this.team === 'blue') {
      this.setPlayers();
      this.router.navigate(['/home']);
    }
  }

  setPlayers() {
    this.teamsService.playersTeam[this.team].one = this.teamPositions.one;
    this.teamsService.playersTeam[this.team].two = this.teamPositions.two;
    this.teamsService.playersTeam[this.team].three = this.teamPositions.three;
    this.teamsService.playersTeam[this.team].four = this.teamPositions.four;
    this.teamsService.playersTeam[this.team].five = this.teamPositions.five;
    this.teamsService.playersTeam[this.team].six = this.teamPositions.six;
    this.teamsService.playersTeam[this.team].libero = this.teamPositions.libero;
    this.teamsService.playersTeam[this.team].liberoNumber = this.teamPositions.libero;
    this.teamPositions = {
      one: null,
      two: null,
      three: null,
      four: null,
      five: null,
      six: null,
      libero: null
    };
  }

}
