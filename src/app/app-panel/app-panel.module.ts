import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppPanelRoutingModule } from './app-panel-routing.module';
import { AppPanelComponent } from './app-panel.component';
import { PostControlComponent } from './post-control/post-control.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { CommentControlComponent } from './comment-control/comment-control.component';
import { AllCommentsComponent } from './all-comments/all-comments.component';


@NgModule({
  declarations: [
    AppPanelComponent,
    PostControlComponent,
    AllPostsComponent,
    CommentControlComponent,
    AllCommentsComponent
  ],
  imports: [
    CommonModule,
    AppPanelRoutingModule
  ]
})
export class AppPanelModule { }
