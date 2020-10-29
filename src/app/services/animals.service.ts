import { HttpClient } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAnimal } from '../model/animals.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor(private http: HttpClient) { }

  createAnimal(value: IAnimal) {
  return this.http.post('https://super-rest.herokuapp.com/monse/animals', value );
  }

  editAnimal(id: string, value: IAnimal){
    return this.http.put('https://super-rest.herokuapp.com/monse/animals/'+id,value);
  }

  getAnimals(): Observable <[IAnimal]>{
    return this.http.get<[IAnimal]>('https://super-rest.herokuapp.com/monse/animals');
  }

  getAnimal(id: string): Observable<IAnimal>{
    return this.http.get<IAnimal>('https://super-rest.herokuapp.com/monse/animals/'+id);
  }

  deleteAnimal(id: string){
    return this.http.delete('https://super-rest.herokuapp.com/monse/animals/'+ id);
  }
}
