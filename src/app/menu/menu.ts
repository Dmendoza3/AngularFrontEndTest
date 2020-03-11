import { Component } from '@angular/core';
import { service } from '../app.service';

@Component({
    selector:'menu',
    templateUrl:'menu.html'
})
export class menu{

    constructor(private service:service){}

    logout(){
        this.service.logout().subscribe((res)=>{
            this.service.reset_session();
            this.service.redirect_to('/');
        });
    }
}