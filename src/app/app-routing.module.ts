import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserCardComponent } from './user-card/user-card.component';


const routes: Routes = [

  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'users/:userId',
    component:UserDetailsComponent

  },
  {
    path:'usercards',
    component:UserCardComponent

  },
  {
    path:'**',
   redirectTo:'users'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
