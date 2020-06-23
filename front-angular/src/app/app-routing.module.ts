import { WelcomeComponent } from './welcome/welcome.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { DataManagerComponent } from './data-manager/data-manager.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'data-manager' , component: DataManagerComponent},
  { path: 'graphics' , component: GraphicsComponent},
  { path: '**' , component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
