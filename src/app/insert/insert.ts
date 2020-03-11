import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { service } from '../app.service';


@Component({
    selector: 'insert',
    templateUrl: './insert.html'
})
export class insert {
    @ViewChild('insertForm', { static:false }) insertForm: NgForm;

    constructor(private service: service){}

    submit(){
        console.log(this.insertForm.value.nombre);
        this.service.insertar(this.insertForm.value.nombre).subscribe(()=>{
            console.log('ya');
            this.insertForm.reset();
        });
    }
}