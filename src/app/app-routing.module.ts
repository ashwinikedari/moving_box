import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrawSquareComponent } from './draw-square/draw-square.component';

const routes: Routes = [
  {
    path:'',component:DrawSquareComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
