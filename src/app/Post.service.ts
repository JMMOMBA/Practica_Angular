import { Injectable } from '@angular/core';

export interface Post {
  titulo?: string,
  texto?: string,
  autor?: string,
  imagen?: string,
  fecha?: string,
  categoria?: string,
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  listaPost: Post[];

  constructor() {
    this.listaPost = [
      { titulo: 'Basket in the Moon', texto: 'Va usté muy cargadoo al ataquerl diodeno no puedor a wan no te digo trigo por no llamarte Rodrigor te voy a borrar el cerito la caidita', autor: 'Cosme Ter', imagen: 'https://cdn.pixabay.com/photo/2020/03/10/16/47/moon-4919501_960_720.jpg', fecha: '23 / 5 / 1999', categoria: 'Deportes' },
      { titulo: 'Good for Me', texto: 'Va usté muy cargadoo al ataquerl diodeno no puedor a wan no te digo trigo por no llamarte Rodrigor te voy a borrar el cerito la caidita', autor: 'Josetxu Letón', imagen: 'https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_960_720.jpg', fecha: '18 / 11 / 2000', categoria: 'Gastronomía' },
      { titulo: 'Cinema Paradis', texto: 'Va usté muy cargadoo al ataquerl diodeno no puedor a wan no te digo trigo por no llamarte Rodrigor te voy a borrar el cerito la caidita', autor: 'Charles Moló', imagen: 'https://cdn.pixabay.com/photo/2017/11/24/10/43/admission-2974645_960_720.jpg', fecha: '22 / 10 / 2004', categoria: 'Cine' }
    ];
  }

  add(agregarPost: Post) {
    this.listaPost.push(agregarPost);
    console.log(this.listaPost);

  }

  getAllPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.listaPost);
    })
  }

  getPostsByCategoria(pPostsByCategoria: string): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      const listaPost = [];
    });
  }
}


