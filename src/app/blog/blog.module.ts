import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { RouterModule } from '@angular/router';
import { routes } from './blog.routes';



@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class BlogModule { }
