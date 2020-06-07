import { Component, OnInit, Input } from '@angular/core';
import {Comment} from '../../_models/comment'

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent implements OnInit {

  constructor() { }
  @Input()
  comment:Comment

  ngOnInit(): void {
  }

}
