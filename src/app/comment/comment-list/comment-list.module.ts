import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './comment-list.component';
import { CommentItemComponent } from '../comment-item/comment-item.component';



@NgModule({

  exports: [CommentListComponent,CommentItemComponent],
  declarations: [CommentListComponent,CommentItemComponent],
  entryComponents: [CommentListComponent],

  imports: [
    CommonModule
  ]
})
export class CommentListModule { }
