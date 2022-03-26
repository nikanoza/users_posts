import { Component, OnInit } from '@angular/core';
import { ServerService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  fetchUsers = false; //bool to determinate when users request done
  fetchPosts = false; //bool to determinate when posts request done

  constructor(private server: ServerService){}

  ngOnInit(): void {
    //fetching users data
    this.server.getUsers().subscribe(
      (response) => {
        this.server.updateUsers(response);
        this.fetchUsers = true;
      }
    );

    //fetvhing posts data
    this.server.getPosts().subscribe(
      (response) => {
        this.server.updatePosts(response);
        this.fetchPosts = true;
      }
    )
  }
}
