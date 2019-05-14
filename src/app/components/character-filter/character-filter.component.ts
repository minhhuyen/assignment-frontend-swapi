import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-filter',
  templateUrl: './character-filter.component.html',
  styleUrls: ['./character-filter.component.scss']
})
export class CharacterFilterComponent implements OnInit {
  @Output() updateCharacterEvent = new EventEmitter<any>();
  filterForm: FormGroup;
  species: any;
  movies: any;
  characters: any;

  constructor(private formBuilder: FormBuilder,
              private characterService: CharacterService) { }

  ngOnInit() {
    this.characterService.getSpecies()
      .subscribe(
        data => {
          this.species = data.results;
        });
    this.characterService.getMovies()
      .subscribe(
        data => {
          this.movies = data.results;
        });

    this.characterService.getCharacters()
      .subscribe(
        data => {
          this.characters = data.results;
        });


    this.filterForm = this.formBuilder.group({
      movie: ['', Validators.required],
      species: ['', Validators.required],
      minyear: ['', Validators.required],
      maxyear: ['', Validators.required]
    });
  }

  /**
   * Filters the characters based on the user selection
   */
  filterCharacters() {
    if (this.filterForm.get('species').value) {
      this.sendUpdatedCharacters(
        this.species.filter(specie => specie.name === this.filterForm.get('species').value),
        'people'
      );
    }

    if (this.filterForm.get('movie').value) {
      this.sendUpdatedCharacters(
        this.movies.filter(movie => movie.title === this.filterForm.get('movie').value),
        'characters'
      );
    }

    // TODO: Implement the min and max years filter
  }

  /**
   * Send the updated character to the main component
   *
   * @param characters
   * @param type
   */
  sendUpdatedCharacters(characters: any, type: string) {
    this.updateCharacterEvent.emit(characters[0][type]);
  }
}
