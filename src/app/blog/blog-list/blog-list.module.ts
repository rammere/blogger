import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogItemComponent } from '../blog-item/blog-item.component';
import { BlogListComponent } from './blog-list.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({

  // exports: [BlogListComponent,BlogItemComponent],
  // declarations: [BlogListComponent,BlogItemComponent],
  // entryComponents: [BlogListComponent],

  imports: [
    CommonModule,
    // NgxPaginationModule
  ]
})
export class BlogListModule { }
