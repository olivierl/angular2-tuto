import {Component} from 'angular2/core';
import {CoursesComponent} from './courses/courses.component';
import {AuthorsComponent} from './authors/authors.component';
import {FavoriteComponent} from './favorite/favorite.component';
import {LikeComponent} from './like/like.component';
import {VoterComponent} from './voter/voter.component';
import {TweetsComponent} from './twitter/tweets.component';
import {ZippyComponent} from './zippy/zippy.component';
import {SubscriptionFormComponent} from './subscription-form/subscription-form.component';
import {ChangePasswordFormComponent} from './change-password-form/change-password-form.component';

@Component({
  selector: 'my-app',
  template: `
    <div class="container-fluid">
      <h1>My First Angular 2 App</h1>
      <hr>
      <change-password-form></change-password-form>
      <hr>
      <subscription-form></subscription-form>
      <hr>
      <courses></courses>
      <authors></authors>
      <hr>
      <favorite [is-favorite]="isFavorite" (change)="onChange($event)"></favorite>
      <hr>
      <like [iLike]="tweet.iLike" [totalLikes]="tweet.totalLikes"></like>
      <hr>
      <voter [voteCount]="subject.voteCount" [myVote]="subject.myVote" (vote)="onVote($event)"></voter>
      <hr>
      <tweets></tweets>
      <hr>
      <zippy title="This is the title">
        Here is the content
      </zippy>
    </div>
  `,
  directives: [
    CoursesComponent,
    AuthorsComponent,
    FavoriteComponent,
    LikeComponent,
    VoterComponent,
    TweetsComponent,
    ZippyComponent,
    SubscriptionFormComponent,
    ChangePasswordFormComponent
  ]
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
