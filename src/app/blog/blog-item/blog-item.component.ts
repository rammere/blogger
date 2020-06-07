import { Component, OnInit, Input, Output } from '@angular/core';
import { Blog } from 'src/app/_models/blog';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/_services/blog.service';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {

  @Input()
  blog:Blog


  @Output() deleteDone: any= new EventEmitter();

  constructor(private router:Router,private blogService:BlogService) { }

  ngOnInit(): void {
  }

  view(){
    this.router.navigate(['/blog/'+this.blog.id])
  }
  edit(){
    this.router.navigate(['/blog-edit/'+this.blog.id])
  }
   delete(){
     debugger;
     this.blogService.deleteBlog(this.blog.id).subscribe(data=>{
      //  success refresh blogs
      this.deleteDone.emit()

     }
     )
 }
  

}
