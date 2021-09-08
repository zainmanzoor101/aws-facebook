import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService, CreateCommentInput, Post } from '../API.service';
import { Auth } from 'aws-amplify';
import { NgxSpinnerService } from 'ngx-bootstrap-spinner';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

    commentForm!: FormGroup;
    postComments: any = [];
    currentUser: any;
    @Input() post!: Post;

    constructor(private api: APIService, private fb: FormBuilder, 
        private spinner: NgxSpinnerService, private toastr: ToastrService) { }

    ngOnInit(): void {
        this.postComments = this.post?.comments?.items;
        Auth.currentUserInfo().then((res: any) => {
            this.currentUser = res;
        })

        this.commentForm = this.fb.group({
            'title': ['', Validators.required]
        });

        // Subscription for adding the new comment
        this.api.OnCreateCommentListener.subscribe((res: any) => {
            if(res){
                if(this.post.id === res.value.data.onCreateComment.post.id){
                    if(res.value.data.onCreateComment.creatorId !== res.value.data.onCreateComment.post.creatorId){
                        if(this.currentUser.attributes.sub === res.value.data.onCreateComment.post.creatorId){
                            this.toastr.info(`${res.value.data.onCreateComment.creatorName} has commented on your post...`, 'Notification');
                        }
                    }
                    this.postComments = [...this.postComments, res.value.data.onCreateComment];
                }
            }
        });
    }

    onAddComment(commentForm: any, post: any) {
        // Creating the Comment Obj.
        let comment: CreateCommentInput = {
            content: commentForm.title,
            postID: post.id,
            creatorId: this.currentUser.attributes.sub,
            creatorName: this.currentUser.username
        }


        //Adding the comment;
        this.spinner.show();
        this.api.CreateComment(comment).then((res: any) => {
            console.log('Comment is added');
            this.spinner.hide();
            this.toastr.success('New comment is added! ', 'Successful');
            this.commentForm.reset();
        }).catch((err: any)=>{
            this.spinner.hide();

        });

    }

    dropIt() {
        let el: any = document.getElementById(this.post.id);
        el.style.height = el.clientHeight + "px";
        this.api.GetPost(this.post.id).then((res: any) => {
            this.postComments = res.comments.items;
        })
        this.toggleClass(document.getElementById(this.post.id), "hide");
    }

    toggleClass(el: any, className: any) {
        if (el) {
            if (el.className.indexOf(className) != -1) {
                el.className = el.className.replace(className, '');
            } else {
                el.className += ' ' + className;
            }
        }
    };


}
