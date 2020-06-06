import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Blog } from '../_models/blog';


@Injectable({ providedIn: 'root' })
export class BlogService {

    constructor(private httpClient: HttpClient) {

    }


    getBlogs() {
 
        return this.httpClient.get<Blog[]>("https://5ed89e234378690016c6a276.mockapi.io/api/blogs")
        // return this.http.get<Blog[]>("https://5ed89e234378690016c6a276.mockapi.io/api/blogs")
        .pipe(map(blogs=>{
            return blogs
        }))
    }

    postBlog()
    {

    }

    deleteBlog()
    {

    }

    updateBlog()
    {

    }



    logout() {
        // // remove user from local storage and set current user to null
        // localStorage.removeItem('currentUser');
        // this.currentUserSubject.next(null);
    }
}