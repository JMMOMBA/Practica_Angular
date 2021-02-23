import { Component, OnInit } from '@angular/core';

import { Post, PostService } from 'src/app/Post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPosts()
      .then(listaPosts => {
        this.posts = listaPosts;
      })
  }
  async onChange($event) {

    console.log($event)
    this.posts = await this.postService.getPostsByCategoria($event);
  }
  getDate(pDateString) {
    const arrDate = pDateString.split('-');
    return `${arrDate[1]}/${arrDate[0]}/${arrDate[2]}`;
  }
}

