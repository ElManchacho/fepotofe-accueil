import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/class/post';
import {User} from 'src/app/class/user';
import {Comment} from 'src/app/class/comment';
import {Answer} from 'src/app/class/answer';
import { POSTS } from '../../testObj/mock';


@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {
  
  posts: Post[] = POSTS;

  enCours: Post[] = [];

  acceptes: Post[] = [];

  finis: Post[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initLists();
  }

  initLists():void {

    this.posts.forEach(p => {

      if(p.etat=="-1")
      {
        this.enCours.push(p);
      }

      else if (p.etat=="0")
      {
        this.acceptes.push(p);
      }

      else
      {
        this.finis.push(p);
      }
      
    });


  }

}
