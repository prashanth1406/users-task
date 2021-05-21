import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:User[]=[];

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }
  onSelect(user){
    this.router.navigateByUrl('/users/'+user.id);
  }
  gotoUserCards(){
    this.router.navigateByUrl('/usercards');
  }

}
