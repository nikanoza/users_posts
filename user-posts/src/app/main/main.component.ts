import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  users: User[] = []; // users array
  search: string = ''; // filter pipe value
  fetchData = false; // bool to determinate when request done

  constructor(private server:ServerService) { }

  ngOnInit(): void {
    this.users = this.server.users;
  }
}
