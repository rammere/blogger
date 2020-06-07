import { Component, OnInit, Input } from '@angular/core';
import { Commentservice } from 'src/app/_services/comment.service';
import { Observable } from 'rxjs';
import {Comment} from "../../_models/comment"

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  constructor(private commentService:Commentservice) { }
  @Input()
  blogId:number

  public comments$:Observable<Comment[]>

  ngOnInit(): void {
    this.comments$=this.commentService.getComments(this.blogId)
  }

}
