import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostControlComponent } from './post-control/post-control.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { CommentControlComponent } from './comment-control/comment-control.component';
import { AllCommentsComponent } from './all-comments/all-comments.component';

const routes: Routes = [
  { path: 'posts/control', component: PostControlComponent },
  { path: 'posts/all', component: AllPostsComponent },
  { path: 'comments/control', component: CommentControlComponent },
  { path: 'comments/all', component: AllCommentsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppPanelRoutingModule { }
