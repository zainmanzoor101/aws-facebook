import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { APIService, CreateCommentInput, Post } from '../API.service';
import { Auth } from 'aws-amplify';

@Component({
    selector: 'single-post',
    templateUrl: './single-post.component.html',
    styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

    constructor() { }

    @Input() post!: Post;

    ngOnInit(): void {
    }




    
}
