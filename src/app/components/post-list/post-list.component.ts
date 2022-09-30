import { Component, OnInit } from '@angular/core';
import { BlogserviceService } from 'src/app/services/blogservice.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
 postList$=this.blogservice.getPostList()
  constructor(private readonly blogservice:BlogserviceService) { }

  ngOnInit(): void {
  }

}
