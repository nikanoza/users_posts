import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Post } from '../models/post.model';
import { User } from '../models/user.model';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user!: User;
  posts: Post[] = []; 
  fetchUser = false;

  constructor(private route:ActivatedRoute, private server: ServerService) { }

  ngOnInit(): void {

    //get user from resolver or router params if this page load first
    this.route.data.subscribe(
      (data: Data) => {
        if(data['user']){
          this.user = data['user'];
        }else{
          this.user = this.server.getUser(+this.route.snapshot.params['id'])! ;
        }
        this.fetchUser = true;
        this.posts = this.server.posts.filter( post => post.userId === this.user.id);
      }
    );
  }
}
