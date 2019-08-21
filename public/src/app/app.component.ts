import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Cake } from './cake';
import { Comment } from './comment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'public';
  cakes: Cake[];
  cake: Cake;
  viewCake: Cake;
  comment: Comment;

  constructor(private _httpService: HttpService){
    //reserve for dependency injections
  }

  ngOnInit(){
    this.getCakesFromService();
    this.cake = {name: "", img: ""};
    this.comment = {comment: "", rating: null};
    this.cakes = [];
  }
    
  getCakesFromService(){
    let observable = this._httpService.getCakes();
    observable.subscribe( (data: Cake[]) => {
      console.log("Here's all cakes", data)
      this.cakes = data;
    })
  }
  
  submitCake(){
    console.log("**********IN SUBMIT CAKE")
    let observable = this._httpService.createCake(this.cake);
    observable.subscribe(data => {
      console.log("Got data from submit cake back", data);
      this.cake = {name: "", img: ""};
    })
    this.getCakesFromService();
  }

  rateCake(id: string, comment: string){
    console.log("******************", id)
    console.log("******************", comment)
    
  }

  cakeToShow(cake: Cake){
    this.viewCake = cake;
  }
}
