import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';
// import { ITweetData } from './like/like.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tweet = {
    body: 'AppComponent Text',
    isLiked: true,
    likesCount: 10
  }

  // onLikeChanged(tweetData: ITweetData){
  //   console.log("parent likes = ", this.tweet.likesCount +  "child likes = ", tweetData.likesCount);
  //   // console.log(this.tweet.body);
  // }
}


