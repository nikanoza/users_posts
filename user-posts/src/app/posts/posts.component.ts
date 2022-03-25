import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  constructor(private server: ServerService) { }

  ngOnInit(): void {
    this.posts = this.server.posts;
  }

}
