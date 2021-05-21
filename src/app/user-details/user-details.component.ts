import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user:User;

  constructor(private activatedRoute: ActivatedRoute,private userService:UserService,private router:Router) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params.userId;
    this.getUserDetails(id)
  }

  getUserDetails(id){
    this.userService.getUserDetails(id)
    .subscribe(user => this.user = user);
  }
  swipeLeft(){
    this.router.navigateByUrl('/users')
  }
  swipeRight(){
    this.router.navigateByUrl('/users')
  }

  goToUsers(){
    this.router.navigateByUrl('/users')
  }

}
