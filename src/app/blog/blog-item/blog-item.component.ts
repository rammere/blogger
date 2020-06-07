import { Component, OnInit, Input } from '@angular/core';
import { Blog } from 'src/app/_models/blog';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/_services/blog.service';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {

  @Input()
  blog:Blog
  constructor(private router:Router,private blogService:BlogService) { }

  ngOnInit(): void {
  }

  view(){
    this.router.navigate(['/blog/'+this.blog.id])
  }
  edit(){
    this.router.navigate(['/blog-edit/'])
  }
   delete(){
     this.blogService.deleteBlog(this.blog.id)
 }
  

}
