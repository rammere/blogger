import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogItemComponent } from './blog-item/blog-item.component';



@NgModule({
  declarations: [BlogListComponent, BlogItemComponent],
  exports:[BlogListComponent,BlogItemComponent],
  imports: [
    CommonModule
  ]
})
export class BlogModule { }
