import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  teamName = {
    red: null,
    blue: null
  };
  playersTeam = {
    red: {
      one: null,
      two: null,
      three: null,
      four: null,
      five: null,
      six: null,
      libero: null,
      liberoNumber: null
    },
    blue: {
      one: null,
      two: null,
      three: null,
      four: null,
      five: null,
      six: null,
      libero: null,
      liberoNumber: null
    }
  };
  historyPlayersTeam = [];
  servicingTeam = null;
  index = 0;
  playersNames = {
    red: [],
    blue: []
  };
  playersNumbers = {
    red: [],
    blue: []
  };
  constructor() { }

  randomServicingTeam() {
    this.servicingTeam = (Math.random() > 0.5) ? 'blue' : 'red';
  }

  rotate(team: string) {
    if (this.servicingTeamCalc(team)) {
      this.historyPlayersTeam.push(Object.assign({}, this.playersTeam));
      this.index++;
      const temp = this.playersTeam[team].one;
      this.playersTeam[team].one = this.playersTeam[team].two;
      this.playersTeam[team].two = this.playersTeam[team].three;
      this.playersTeam[team].three = this.playersTeam[team].four;
      this.playersTeam[team].four = this.playersTeam[team].five;
      this.playersTeam[team].five = this.playersTeam[team].six;
      this.playersTeam[team].six = temp;
    }
  }

  servicingTeamCalc(team: string) {
    if (team === 'red' && this.servicingTeam === 'blue') {
      this.servicingTeam = 'red';
      return true;
    } else if (team === 'blue' && this.servicingTeam === 'red') {
      this.servicingTeam = 'blue';
      return true;
    } else {
      return false;
    }
  }

  backwardRotation() {
    if (this.historyPlayersTeam.length > this.index + 1) {
      this.liberoOut();
      this.index++;
      this.playersTeam = this.historyPlayersTeam[this.index];
    }
  }

  fordwardRotation() {
    if (this.index - 1 >= 0) {
      this.liberoOut();
      this.index--;
      this.playersTeam = this.historyPlayersTeam[this.index];
    }
  }

  resetHistory() {
    this.historyPlayersTeam.splice(this.index);
  }

  getServicingName() {
    return this.teamName[this.servicingTeam];
  }

  changeLibero(team: string, player: string) {
    if (this.playersTeam[team].libero === this.playersTeam[team].liberoNumber ||
      this.playersTeam[team][player] === this.playersTeam[team].liberoNumber) {
      const temp = this.playersTeam[team][player];
      this.playersTeam[team][player] = this.playersTeam[team].libero;
      this.playersTeam[team].libero = temp;
    }
  }

  liberoOut() {
    ['red', 'blue'].forEach(team => {
      ['one', 'two', 'three', 'four', 'five', 'six'].forEach(position => {
        if (this.playersTeam[team][position] === this.playersTeam[team].liberoNumber) {
          this.changeLibero(team, this.playersTeam[team][position]);
        }
      });
    });
  }

  changePlayer(team, position, player) {
    if (this.playersTeam[team][position] !== this.playersTeam[team].liberoNumber &&
      this.playersNumbers[team].length > 6) {
      this.playersTeam[team][position] = player;
    }
  }

  resetService() {
    this.teamName = {
      red: null,
      blue: null
    };
    this.playersTeam = {
      red: {
        one: null,
        two: null,
        three: null,
        four: null,
        five: null,
        six: null,
        libero: null,
        liberoNumber: null
      },
      blue: {
        one: null,
        two: null,
        three: null,
        four: null,
        five: null,
        six: null,
        libero: null,
        liberoNumber: null
      }
    };
    this.historyPlayersTeam = [];
    this.servicingTeam = null;
    this.index = 0;
    this.playersNames = {
      red: [],
      blue: []
    };
    this.playersNumbers = {
      red: [],
      blue: []
    };
  }
}
