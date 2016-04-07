import {Component, Input} from 'angular2/core';

@Component({
  selector: 'zippy',
  template: `
    <div class="panel panel-default">
      <div class="panel-heading" (click)="toggle()">
        <i class="glyphicon pull-right" [ngClass]="{
          'glyphicon-chevron-up': !isCollapsed,
          'glyphicon-chevron-down': isCollapsed
        }"></i>
        <h3 class="panel-title">{{ title }}</h3>
      </div>
      <div class="panel-body" *ngIf="!isCollapsed">
        <ng-content></ng-content>
      </div>
    </div>
    `,
    styles: [`
      .panel-heading {
        cursor: pointer;
      }
    `]
})
export class ZippyComponent {
  @Input() title: string;

  isCollapsed = false;

  toggle() {
    this.isCollapsed = !this.isCollapsed;
  }
}
