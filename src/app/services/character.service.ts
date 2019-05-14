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
}
