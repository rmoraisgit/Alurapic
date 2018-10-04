import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../core/authenticate/auth.service';

@Component({
    templateUrl: 'signin.component.html'
})
export class SigninComponent implements OnInit {

    loginForm: FormGroup;
    @ViewChild('inputUserName') inputUserName: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder, 
        private authService: AuthService,
        private router: Router
        ) { }

    ngOnInit(): void {

        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    login() {

        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;

        this.authService.authenticate(userName, password).subscribe(
            success => {
                console.log('TUDO CERTO!');
                this.router.navigate(['photos', userName])
            },
            error => {
                console.log('DEU ERRO...');
                this.loginForm.reset();
                this.inputUserName.nativeElement.focus();
            }
        )
    }
}