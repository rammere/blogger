import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';



@NgModule({
  declarations: [BlogListComponent, BlogItemComponent, BlogDetailComponent],
  exports:[BlogListComponent,BlogItemComponent],
  imports: [
    CommonModule
  ]
})
export class BlogModule { }
