import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from '../API.service';

@Component({
    selector: 'app-add-edit-post',
    templateUrl: './add-edit-post.component.html',
    styleUrls: ['./add-edit-post.component.css']
})
export class AddEditPostComponent implements OnInit {

    public createForm!: FormGroup;
    post: any;

    constructor(private fb: FormBuilder, private activeModal: NgbActiveModal) { }


    ngOnInit(): void {
        this.createForm = this.fb.group({
            title: [this.post ? this.post.title : '', Validators.required],
            content: [this.post ? this.post.content : ''],
        });
    }

    onSubmit(todo: Post) {
        this.activeModal.close(todo);
    }

    onClose() {
        this.activeModal.close();
    }

}
