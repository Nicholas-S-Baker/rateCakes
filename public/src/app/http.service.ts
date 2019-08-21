import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cake } from './cake';
import { Comment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
  }
  getCakes(){
    return this._http.get('/api/cakes')
  }
  //Not sure what line below is used for?? Thought it was needed...
  // observable.subscribe((data: Cake[]) => {
  createCake(cake: Cake){
    return this._http.post('/api/cakes/new', cake)
  }
  //Another way to do it
  // createCake(cake){
  //   return this._http.post<Cake>('/api/cakes/new', cake)
  // }
  postComment(comment: Comment){
    return this._http.post('api/comments/new', comment)
  }

  showCake(id: string){
    return this._http.get('api/cakes/:id')
  }
}

