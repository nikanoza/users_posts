import { Component, OnInit } from '@angular/core';
import { ServerService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  fetchUsers = false;
  fetchPosts = false

  constructor(private server: ServerService){}

  ngOnInit(): void {
    this.server.getUsers().subscribe(
      (response) => {
        this.server.updateUsers(response);
        this.fetchUsers = true;
      }
    );
    this.server.getPosts().subscribe(
      (response) => {
        this.server.updatePosts(response);
        this.fetchPosts = true;
      }
    )
  }
}
