import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CharacterService {
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any>  {
    return this.http.get('https://swapi.co/api/people')
      .map(
        (response: Response) => {
          return response;
        }
      );
  }

  getCharacterType(url): Observable<any>  {
    return this.http.get(url)
      .map(
        (response: Response) => {
          return response;
        }
      );
  }

  getCharacter(url): Observable<any>  {
    return this.http.get(url)
      .map(
        (response: Response) => {
          return response;
        }
      );
  }

  getMovies(): Observable<any>  {
    return this.http.get('https://swapi.co/api/films')
      .map(
        (response: Response) => {
          return response;
        }
      );
  }

  getSpecies(): Observable<any>  {
    return this.http.get('https://swapi.co/api/species')
      .map(
        (response: Response) => {
          return response;
        }
      );
  }
}
