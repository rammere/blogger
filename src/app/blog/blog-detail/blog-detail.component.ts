import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/_services/blog.service';
import { Blog } from 'src/app/_models/blog';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  blogId: string;
  blog:Blog
  currentUser: User;

  constructor(private activatedRoute: ActivatedRoute,private blogService:BlogService,private authenticationService:AuthenticationService) 
   {
    this.blogId = this.activatedRoute.snapshot.paramMap.get('blogId');
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit(): void {
    this.blogService.getBlogById(this.blogId).subscribe(blog=>{
      this.blog=blog
    })
    
  }


}
