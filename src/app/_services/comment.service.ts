import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Comment } from '../_models/comment';


@Injectable({ providedIn: 'root' })
export class Commentservice {

    constructor(private httpClient: HttpClient) { }

    getComments(blogId) {
        return this.httpClient.get<Comment[]>("https://5ed89e234378690016c6a276.mockapi.io/api/blog/" + blogId + "/comment")
            .pipe(map(Comments => {
                return Comments
            }))
    }

    postComment(blogId,comment) {
        return this.httpClient.post<any>("https://5ed89e234378690016c6a276.mockapi.io/api/blog/" + blogId + "/comment/", comment)
            .pipe(map(Comments => {
                return Comments
            }))

    }

    deleteComment(blogId, commentId) {
        return this.httpClient.delete<any>("https://5ed89e234378690016c6a276.mockapi.io/api/blog/" + blogId + "/comment/" + commentId)
            .pipe(map(Comments => {
                return Comments
            }))

    }

    updateComment(blogId, comment) {
        return this.httpClient.put<any>("https://5ed89e234378690016c6a276.mockapi.io/api/blog/" + blogId + "/comment/", comment)
            .pipe(map(Comments => {
                return Comments
            }))



    }

}