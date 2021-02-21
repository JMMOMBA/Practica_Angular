import { Component, OnInit } from '@angular/core';
import { Post, PostService } from 'src/app/Post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Post[];
  blogActual: number;

  constructor(private postService: PostService) {
    this.blogActual = 0;
  }

  async ngOnInit() {
    const posts = await this.postService.getAllPosts();
  }

}

