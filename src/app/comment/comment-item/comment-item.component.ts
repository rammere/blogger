import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ChangeDetectorRef } from '@angular/core';
import {Comment} from '../../_models/comment'
import { AuthenticationService } from 'src/app/_services';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent implements OnInit {

  @ViewChild('textarea',{static: false}) textarea:any;
  currentUser: User;

  constructor(private changeDetectorRef: ChangeDetectorRef,private authenticationService:AuthenticationService) {


    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

   }
  @Input()
  comment:Comment

  @Output() commentOperation=new EventEmitter<{comment:Comment,operation:string}>();

  isUpdating:boolean=false

  ngOnInit(): void {
  }


  delete(){
    this.commentOperation.emit({comment:this.comment,operation:'delete'})
  }

  // update the comment to backend
  updateComment(){
    
    this.comment.comment=this.textarea.nativeElement.value;
    this.commentOperation.emit({comment:this.comment,operation:'update'});
    this.isUpdating=false;

  }
  // start the udpate process locally
  update(){
    this.isUpdating=true
    this.changeDetectorRef.detectChanges(); // not required
    this.textarea.nativeElement.value=this.comment.comment
  }

}
