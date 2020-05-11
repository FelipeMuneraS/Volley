import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ScoreComponent } from '../components/score/score.component';
import { FormsModule } from '@angular/forms';
import { TeamPositionComponent } from '../components/team-position/team-position.component';
import { TeamChangeComponent } from '../components/team-change/team-change.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, ScoreComponent, TeamPositionComponent, TeamChangeComponent],
})
export class HomePageModule {}
