import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Blog } from '../_models/blog';


@Injectable({ providedIn: 'root' })
export class BlogService {

    constructor(private httpClient: HttpClient) { }


    getBlogs(page, limit) {
        return this.httpClient.get<Blog[]>("https://5ed89e234378690016c6a276.mockapi.io/api/blog?sortBy=id&order=desc&page=" + page + "&limit=" + limit)
            .pipe(map(blogs => {
                return blogs
            }))
    }

    getBlogById(blogId) {
        return this.httpClient.get<Blog>("https://5ed89e234378690016c6a276.mockapi.io/api/blog/" + blogId)
            .pipe(map(blog => {
                return blog
            }))
    }

    postBlog(data) {
        return this.httpClient.post<Blog[]>("https://5ed89e234378690016c6a276.mockapi.io/api/blog/", data)
            .pipe(map(blog => {
                return blog
            }))
    }

    putBlog(data, blogId) {
        return this.httpClient.put<Blog>("https://5ed89e234378690016c6a276.mockapi.io/api/blog/" + blogId, data)
            .pipe(map(blog => {
                return blog
            }))
    }

    deleteBlog(blogId) {
        return this.httpClient.delete<Blog>("https://5ed89e234378690016c6a276.mockapi.io/api/blog/" + blogId)
            .pipe(map(blog => {
                return blog
            }))
    }

    updateBlog(data) {
        return this.httpClient.put<Blog[]>("https://5ed89e234378690016c6a276.mockapi.io/api/blog", data)
            .pipe(map(blog => {
                return blog
            }))
    }

}