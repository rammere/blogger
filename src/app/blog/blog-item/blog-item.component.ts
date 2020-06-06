import { Component, OnInit, Input } from '@angular/core';
import { Blog } from 'src/app/_models/blog';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {

  @Input()
  blog:Blog
  constructor() { }

  ngOnInit(): void {
  }

}
