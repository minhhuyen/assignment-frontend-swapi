import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: '',  redirectTo: '/home', pathMatch: 'full' },
  { path: 'character-details/:id', component: CharacterDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
