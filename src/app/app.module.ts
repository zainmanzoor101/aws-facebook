import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { AddEditPostComponent } from './add-edit-post/add-edit-post.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { CommentsComponent } from './comments/comments.component';
import { NgxSpinnerModule } from 'ngx-bootstrap-spinner';
import { ToastComponent } from './toast/toast.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    AddEditPostComponent,
    UserAuthComponent,
    SinglePostComponent,
    CommentsComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AmplifyUIAngularModule,
    NgbModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
