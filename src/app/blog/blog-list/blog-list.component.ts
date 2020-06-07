import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/_services/blog.service';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/_models/blog';
import { filter } from 'rxjs/internal/operators/filter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  public blogs: Blog[]

  config: any;
  collection = { count: 60, data: [] };

  constructor(private blogService: BlogService,private router:Router) {

    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }


  pageChanged(event) {
    this.config.currentPage = event;
    this.loadBlogs()

  }


  ngOnInit(): void {
    this.loadBlogs()
  }

  loadBlogs() {
    this.blogService.getBlogs(this.config.currentPage,this.config.itemsPerPage).pipe(filter(blogs => blogs.length > 0)).subscribe(blogs => {
      this.collection.data = blogs
      this.collection.count = blogs.length
    })


  }
  refreshBlogs(){
    this.config.currentPage=1
    this.loadBlogs()


  }

  addBlog(){
    this.router.navigate(['/blog-edit/'+null])

  }

}