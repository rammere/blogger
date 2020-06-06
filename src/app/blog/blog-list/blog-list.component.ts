import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/_services/blog.service';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/_models/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  public blogs$:Observable<Blog[]>

  constructor(private blogService:BlogService) { }

  ngOnInit(): void {

    this.blogs$=this.blogService.getBlogs()

   }

}
