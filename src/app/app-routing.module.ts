import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'p-home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'p-home', loadChildren: './p-home/p-home.module#PHomePageModule' },
  { path: 'about-of', loadChildren: './about-of/about-of.module#AboutOfPageModule' },
  { path: 'insert-players', loadChildren: './insert-players/insert-players.module#InsertPlayersPageModule' },
  { path: 'select-servicing', loadChildren: './select-servicing/select-servicing.module#SelectServicingPageModule' },
  { path: 'change-libero', loadChildren: './change-libero/change-libero.module#ChangeLiberoPageModule' },
  { path: 'change-player', loadChildren: './change-player/change-player.module#ChangePlayerPageModule' },
  { path: 'insert-rotation', loadChildren: './insert-rotation/insert-rotation.module#InsertRotationPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
