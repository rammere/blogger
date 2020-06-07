import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/_services/blog.service';
import { Blog } from 'src/app/_models/blog';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  blogId: string;
  blog:Blog

  constructor(private activatedRoute: ActivatedRoute,private blogService:BlogService) 
   {
    this.blogId = this.activatedRoute.snapshot.paramMap.get('blogId');
   }

  ngOnInit(): void {
    this.blogService.getBlogById(this.blogId).subscribe(blog=>{
      this.blog=blog
    })
    
  }


}
