import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  characters: any;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.getCharacters()
      .subscribe(
        data => {
          this.characters = data.results;
          console.log('vehicle data', data);
        });
  }

}
