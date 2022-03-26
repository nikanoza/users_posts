import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./models/post.model";
import { User } from "./models/user.model";

@Injectable({
    providedIn: 'root'
})
export class ServerService {
    users: User[] = [];
    posts: Post[] = [];

    constructor(private http: HttpClient){}

    //users information request
    getUsers(){
        return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
    };

    //posts information request
    getPosts(){
        return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    }

    //update information functions
    updateUsers(array: User[]){
        this.users = array;
    }

    updatePosts(array: Post[]){
        this.posts = array;
    }

    // get single user object function
    getUser(id: number){
        return this.users.find( user => user.id === id);
    }
}