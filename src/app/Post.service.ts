import { Injectable } from '@angular/core';

export interface Post {
  titulo: string,
  texto: string,
  autor: string,
  imagen: string,
  fecha: number,
  categoria: string,
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  listaPost: Post[];

  constructor() {
    this.listaPost = [];
  }

  add(agregarPost: Post) {
    this.listaPost.push(agregarPost);
    console.log(this.listaPost);

  }

  getAllPosts(): Post[] {
    return this.listaPost;
  }

  // getPostsByCategoria(pPostsByCategoria: string): Promise<Categorias[]> {
  //   return new Promise((resolve, reject) => {
  //     const arrCategorias = 
  //   });
  // }


  // getByEscritor(pEscritorId: number): Promise<Libro[]> {
  //   return new Promise((resolve, reject) => {
  //     const arrFiltrado = LIBROS.filter(libro => {
  //       return libro.escritor === pEscritorId;
  //     })
  //     resolve(arrFiltrado);
  //   }

}
