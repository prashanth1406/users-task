import { Component, OnInit } from '@angular/core';

import {trigger,keyframes,animate,transition } from '@angular/animations'
import * as kf  from './keyframes';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  animations:[
    trigger('cardAnimator',[
      transition('* => swing',animate(1000,keyframes(kf.swing))),
      transition('* => swiperight', animate(750, keyframes(kf.swiperight))),
      transition('* => swipeleft', animate(750, keyframes(kf.swipeleft)))
    ])
  ]
})
export class UserCardComponent implements OnInit {
  animationstate:string;
  users: User[] =[];
  currentUserIndex:any = 0;
  constructor(private userService:UserService,private route:Router) { }

  ngOnInit() {
    this.getUsers();
  }


  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  startAnimation(state){
    if(!this.animationstate){
      this.animationstate=state;
      this.currentUserIndex++;
    }
  }

  resetAnimation(){
    this.animationstate = ''
  }
  goToUsers(){
    this.route.navigateByUrl('/users')
  }

}
