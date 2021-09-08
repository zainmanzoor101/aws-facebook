import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { UserAuthComponent } from './user-auth/user-auth.component';

const routes: Routes = [
    {
        path: '', 
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login', 
        component: UserAuthComponent
    },
    {
        path: 'home', 
        component: PostsComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
