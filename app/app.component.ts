import {Component} from 'angular2/core';
import {CoursesComponent} from './courses/courses.component';
import {AuthorsComponent} from './authors/authors.component';
import {FavoriteComponent} from './favorite/favorite.component';
import {LikeComponent} from './like/like.component';
import {VoterComponent} from './voter/voter.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>My First Angular 2 App</h1>
    <courses></courses>
    <authors></authors>
    <i class="glyphicon glyphicon-star"></i>
    <favorite [is-favorite]="isFavorite" (change)="onChange($event)"></favorite>
    <like [iLike]="tweet.iLike" [totalLikes]="tweet.totalLikes"></like>
    <voter [voteCount]="subject.voteCount" [myVote]="subject.myVote" (vote)="onVote($event)"></voter>
  `,
  directives: [CoursesComponent, AuthorsComponent, FavoriteComponent, LikeComponent, VoterComponent]
})
export class AppComponent {
  isFavorite = true;
  onChange($event) {
    console.log($event);
  }
  tweet = {
    totalLikes: 123,
    iLike: true
  }
  onVote($event) {
    console.log($event);
  }
  subject = {
    voteCount: 9,
    myVote: 0
  }
}
