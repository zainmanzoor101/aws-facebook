import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-auth',
    templateUrl: './user-auth.component.html',
    styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

    user?: CognitoUserInterface | undefined;
    authState!: AuthState;

    constructor(private ref: ChangeDetectorRef, private router: Router) { }

    ngOnInit(): void {

        onAuthUIStateChange((authState: any, authData: any)=>{
            this.authState = authState;
            this.user = authData as CognitoUserInterface;
            console.log("User Logged In: ", this.user);
            console.log("User Auth State: ", this.authState);
            if(this.authState === 'signedin'){
                this.router.navigate(['home']);
            } else {
                this.router.navigate(['login']);
            }
            // this.ref.detectChanges();
        })
    }

    ngOnDestroy(): void {
        console.log("I am logged in and destroyed");
    }



}
