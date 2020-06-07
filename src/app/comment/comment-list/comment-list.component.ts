import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Commentservice } from 'src/app/_services/comment.service';
import { Observable } from 'rxjs';
import { Comment } from "../../_models/comment"
import { map } from 'rxjs/operators';
import { AlertService } from 'src/app/_services';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  commentData: any;

  constructor(private commentService: Commentservice, private alertService: AlertService) { }
  @Input()
  blogId: number

  public comments: Comment[]


  @ViewChild('textarea') textarea: any;


  ngOnInit(): void {
    this.commentService.getComments(this.blogId).subscribe(data => {
      this.comments = data
    })
  }

  commentOperation(data) {

    if (data.operation == 'update') {
      this.commentService.putComment(this.blogId, data.comment).subscribe(data => {

        this.alertService.success('Updated successful', true);
        setTimeout(() => {
          this.alertService.clear()
        }, 2000)

      })

    }
    else {
      this.commentService.deleteComment(this.blogId, data.comment.id).subscribe(data => {
        this.comments = this.comments.filter(comment => comment.id !== data.id)
        this.alertService.success('Deleted successful', true);
        setTimeout(() => {
          this.alertService.clear()
        }, 2000)

      })
    }

  }
  addComment() {
    this.commentService.postComment(this.blogId, { comment: this.textarea.nativeElement.value }).subscribe(comment => {
      this.comments.push(comment)
      this.textarea.nativeElement.value = ""
    })
  }
  



}
