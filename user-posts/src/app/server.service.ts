import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "./models/user.model";

@Injectable({
    providedIn: 'root'
})
export class ServerService {
    constructor(private http: HttpClient){}

    getUsers(){
        return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
    };

    getPosts(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
    }
}