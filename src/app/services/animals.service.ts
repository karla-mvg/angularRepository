import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAnimal } from '../model/animals.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor(private http: HttpClient) { }

  createAnimal(value: IAnimal) {
  return this.http.post('https://super-rest.herokuapp.com/monse/animals', value );
  }
}
