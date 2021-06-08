import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './Components/Users/user.component';
import { PostsComponent } from './Components/posts/posts.component';
import { PostDetailsComponent } from './Components/post-details/post-details.component';
import { TagsComponent } from './Components/tags/tags.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'users', component: UserComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: PostDetailsComponent },
  { path: 'tags', component: TagsComponent },
  { path: '**', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
