import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Blog } from '../_models/blog';


@Injectable({ providedIn: 'root' })
export class BlogService {

    constructor(private httpClient: HttpClient) {}


    getBlogs(page,limit) {
        return this.httpClient.get<Blog[]>("https://5ed89e234378690016c6a276.mockapi.io/api/blog?page="+page+"&limit="+limit)
            .pipe(map(blogs => {
                return blogs
            }))
    }

    postBlog(data) {
        return this.httpClient.post<Blog[]>("https://5ed89e234378690016c6a276.mockapi.io/api/blog", data)
            .pipe(map(blog => {
                return blog
            }))
    }

    deleteBlog(blogId) {
        return this.httpClient.delete<Blog[]>("https://5ed89e234378690016c6a276.mockapi.io/api/blog/" + blogId)
            .pipe(map(blogs => {
                return blogs
            }))
    }

    updateBlog(data) {
        return this.httpClient.put<Blog[]>("https://5ed89e234378690016c6a276.mockapi.io/api/blog", data)
            .pipe(map(blog => {
                return blog
            }))
    }

}