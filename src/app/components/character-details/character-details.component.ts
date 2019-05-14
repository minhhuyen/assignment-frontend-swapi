import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../services/character.service'

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  id: string;
  character: any;
  characterName: string;
  species: string[] = [];
  films: string[] = [];
  starships: string[] = [];

  constructor(private route: ActivatedRoute,
              private characterService: CharacterService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');

      this.characterService.getCharacters()
        .subscribe(
          data => {
            this.character = data.results.filter(
              (character, index) => index === parseInt(this.id))[0];
            this.species = [];
            this.films = [];
            this.starships = [];

            this.characterName = this.character.name;
            this.character.species.map(url => {
              return this.characterType(url, 'name', this.species);
            });
            this.character.films.map(url => {
              return this.characterType(url, 'title', this.films);
            });
            this.character.starships.map(url => {
              return this.characterType(url, 'name', this.starships);
            });
          });
    });
  }

  /**
   * Gets the character type based on the selected character
   *
   * @param {string} url
   * @param {string} name
   * @param {string[]} type
   */
  characterType(url: string, name: string, type: string[]) {
    this.characterService.getCharacterType(url).subscribe(
      data => {
        type.push(data[name]);
      });
  }

  /**
   * Navigates back to the main page
   */
  backToMain() {
    window.history.back();
  }
}
