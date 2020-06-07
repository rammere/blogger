import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentItemComponent } from './comment-item/comment-item.component';



@NgModule({
  declarations: [CommentListComponent, CommentItemComponent],
  exports: [CommentListComponent, CommentItemComponent],
  imports: [
    CommonModule,
  ]
})
export class CommentModule { }
