import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimationComponent } from './global/animation/animation.component';
import { GridComponent } from './global/grid/grid.component';
import { GameComponent } from './global/game/game.component';
import { ProjectsComponent } from './global/projects/projects.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent},
  { path: 'animations', component: AnimationComponent },
  { path: 'games', component: GameComponent },
  { path: '', component: GridComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
