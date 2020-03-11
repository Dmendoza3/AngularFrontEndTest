import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { service } from '../app.service';

@Component({
    selector: 'get',
    templateUrl: './get.html'
})
export class get implements OnInit{
    @ViewChild('listForm', { static:false }) listForm: NgForm;

    constructor(private service: service){}

    person = [];
    id:Number;

    ngOnInit(){
        this.CargarRegistros();
    }

    CargarRegistros(){
        this.service.get().subscribe(res => {
            this.person = res.response;
            console.log(res);
        });
    }

    getPersona(id){
        this.id = id;
    }

    submit(){
        console.log(this.listForm.value.nombre);

        this.service.actualizar([this.listForm.value.nombre, this.id]).subscribe(()=>{
            console.log('ya');
            this.listForm.reset();
            this.CargarRegistros();
        });
    }

    delete(){
        console.log(this.id);

        this.service.borrar(this.id).subscribe(()=>{
            console.log('ya');
            this.listForm.reset();
            this.CargarRegistros();
        });
    }
}