import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { isJSDocThisTag } from 'typescript';
import { AddEditPostComponent } from '../add-edit-post/add-edit-post.component';
import { APIService, CreateCommentInput, Post, UpdatePostInput } from '../API.service';
import { Auth } from 'aws-amplify';
import { NgxSpinnerService } from 'ngx-bootstrap-spinner';
import { ToastrService } from 'ngx-toastr';
@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
    
    posts!: Array<Post>;
    commentForm!: FormGroup;
    currentUser: any;
    
    constructor(private api: APIService,
        private toastr: ToastrService,
        private modalService: NgbModal,
        private fb: FormBuilder,
        private spinner: NgxSpinnerService) { }

    ngOnInit(): void {


        //Getting the current user:
        this.getCurrentUser();

        //creating the form
        this.initForm();

        //Getting all the posts;
        this.getAllPosts();


        // Subscription for creating the new post:
        this.api.OnCreatePostListener.subscribe((res: any) => {
            this.posts = [res.value.data.onCreatePost, ...this.posts];
        })
    }

    // Initializing the form
    initForm() {
        this.commentForm = this.fb.group({
            title: [],
            content: []
        });
    }



    // getting the current user. 
    getCurrentUser() {
        Auth.currentUserInfo().then((res: any) => {
            this.currentUser = res;
        });
    }

    // Getting the list of posts.
    getAllPosts() {
        this.spinner.show();
        this.api.ListPosts().then((res: any) => {
            this.posts = res.items;
            console.log(this.posts);
            this.spinner.hide();
        }).catch((err: Error) => {
            console.log('Error getting the data: ', err);
            this.toastr.error(err.message, 'Error!!!');
        });
    }


    // On Creating the post. 
    onCreate() {
        let modalRef = this.modalService.open(AddEditPostComponent,
            {
                ariaLabelledBy: 'modal-basic-title',
            });
        modalRef.result.then((post: Post) => {
            if(post){
                this.spinner.show();
                post.creatorId = this.currentUser.attributes.sub;
                post.creatorName = this.currentUser.username;
                this.api.CreatePost(post).then((res: any) => {
                    console.log("Post is created: ", res);
                    this.spinner.hide();
                    this.toastr.success('New Post is added', 'Successfull');
                })
                .catch((err: any) => {
                    console.log("error creating the todo task: ", err);
                    this.spinner.hide();
                    this.toastr.success(err, 'Error!!!');
                });
            }
        });
    }
}
