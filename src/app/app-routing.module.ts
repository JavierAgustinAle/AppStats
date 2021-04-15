import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './Components/Users/user.component'
import { PostsComponent } from './Components/posts/posts.component';

const routes: Routes = [
  { path: '**', redirectTo: '/users' },
  { path: 'users', component: UserComponent },
  { path: 'posts', component: PostsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }