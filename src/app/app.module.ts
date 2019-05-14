import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CharacterFilterComponent } from './components/character-filter/character-filter.component';
import { MainComponent } from './components/main/main.component';
import { CharacterService } from './services/character.service';
import { NouisliderModule } from 'ng2-nouislider';

@NgModule({
  declarations: [
    AppComponent,
    CharacterDetailsComponent,
    CharacterFilterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NouisliderModule,
    ReactiveFormsModule
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
