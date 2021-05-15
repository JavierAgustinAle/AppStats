import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './Components/Users/user.component';
import { PostsComponent } from './Components/posts/posts.component';
import { PostDetailsComponent } from './Components/post-details/post-details.component';

const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: PostDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
