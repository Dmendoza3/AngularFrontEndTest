import { Component, ViewChild, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';

import { service } from '../app.service';

@Component({
    selector: 'login',
    templateUrl: 'login.html'
})
export class login {
    @ViewChild('loginForm', { static:false }) loginForm: NgForm;

    constructor(private service: service){}

    ngOnInit(){
        console.log(this.service.get_session())
        if(this.service.get_session()){
            this.service.redirect_to('/menu');
        }
    }

    login(){
        this.service.login([this.loginForm.value.email, this.loginForm.value.password]).subscribe((res)=>{
            if(res){
                this.service.set_session(res);
                this.service.redirect_to('/menu');
                this.loginForm.reset();
            }
        })
    }
}