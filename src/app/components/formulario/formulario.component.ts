
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostService } from '../../Post.service';

@Component({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

    formulario: FormGroup;

    constructor(
        private postService: PostService
    ) {
        this.formulario = new FormGroup({
            titulo: new FormControl(),
            texto: new FormControl(),
            autor: new FormControl(),
            imagen: new FormControl(),
            fecha: new FormControl(),
            categoria: new FormControl(),
        })
    }

    ngOnInit(): void {
    }

    async onSubmit() {
        const arrPost = await this.postService.add(this.formulario.value);
        this.formulario.reset();
        //console.log(arrPost);

    }

}
