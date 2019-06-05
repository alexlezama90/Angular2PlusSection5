import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
  .glyphicon {
    color: green;
  }
  `]
})
export class AppComponent {
  post = {
    title: 'Title',
    isFavorite: true
  }

  // onFavoriteChange(isFavorite){
  //   console.log("Favorite changed: ", isFavorite);
  // }

  // onFavoriteChange(eventArgs){
  //   console.log("Favorite changed: ", eventArgs);
  // }

  // onFavoriteChange(eventArgs: { newValue: boolean}){ //We can use inline annotations to get Intellisense
  //   console.log("Favorite changed: ", eventArgs.newValue);
  // }

  onFavoriteChange(eventArgs: FavoriteChangedEventArgs) { //We can define interfaces to make it even more understandable
    console.log("Favorite changed: ", eventArgs); //eventArgs.value
  }
}


