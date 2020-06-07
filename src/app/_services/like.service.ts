import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Blog } from '../_models/blog';


@Injectable({ providedIn: 'root' })
export class Likeservice {

    constructor(private httpClient: HttpClient) {

    }


    getLikes(blogId) {
        return this.httpClient.get<Comment[]>("https://5ed89e234378690016c6a276.mockapi.io/api/blog/" + blogId + "/like")
            .pipe(map(Likes => {
                return Likes
            }))
    }

    postComment(blogId,like) {
        return this.httpClient.post<any>("https://5ed89e234378690016c6a276.mockapi.io/api/blog/" + blogId + "/like/", like)
            .pipe(map(Likes => {
                return Likes
            }))

    }

    deleteComment(blogId, likeId) {
        return this.httpClient.delete<any>("https://5ed89e234378690016c6a276.mockapi.io/api/blog/" + blogId + "/like/" + likeId)
            .pipe(map(Likes => {
                return Likes
            }))

    }

    updateComment(blogId, like) {
        return this.httpClient.put<any>("https://5ed89e234378690016c6a276.mockapi.io/api/blog/" + blogId + "/like/", like)
            .pipe(map(Likes => {
                return Likes
            }))



    }

}