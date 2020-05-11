import { Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-insert-players',
  templateUrl: './insert-players.page.html',
  styleUrls: ['./insert-players.page.scss'],
})
export class InsertPlayersPage implements OnInit {

  @ViewChild('contentScroll', { static: false }) private contentScroll: any;

  players = [];
  player = '';
  numbers = [];
  number = null;
  isDisabled = true;
  team = {
    color: '',
    number: '',
    name: null
  };
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private teamsService: TeamsService) {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.team.color = res.team;
      this.team.number = res.teamNumber;
    });
  }

  ngOnInit() { }

  isDisabledP() {
    if (this.players.length < 5 || this.team.name === null || this.team.name === '') {
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
  }



  addPlayer() {
    if (this.player !== '' &&
      this.number !== '' &&
      !(this.numbers.indexOf(this.number) !== -1)) {
      this.players.push(this.player);
      this.numbers.push(this.number);
      this.player = '';
      this.number = null;
      this.isDisabledP();
      setTimeout(() => {
        this.contentScroll.scrollToBottom();
      }, 50);
    }
  }

  removePlayer(i) {
    this.players.splice(i, 1);
    this.numbers.splice(i, 1);
    if (this.players.length === 0) {
      this.isDisabled = true;
    }
  }

  next() {
    this.saveData(this.team.color);
    if (this.team.color === 'red') {
      this.router.navigate(['/insert-players'], {
        queryParams: {
          team: 'blue',
          teamNumber: '2'
        }
      });
      this.init();
    } else if (this.team.color === 'blue') {
      this.router.navigate(['/select-servicing']);
      this.init();
    }
  }

  init() {
    this.players = [];
    this.player = '';
    this.numbers = [];
    this.number = null;
    this.isDisabled = true;
    this.team = {
      color: '',
      number: '',
      name: null
    };
  }

  saveData(team) {
    this.teamsService.playersNames[team] = this.players;
    this.teamsService.playersNumbers[team] = this.numbers;
    this.teamsService.teamName[team] = this.team.name;
  }

}
