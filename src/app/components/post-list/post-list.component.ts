import { Component, OnInit, Inject, ViewChild, ElementRef, Input } from '@angular/core';
import { BlogserviceService } from 'src/app/services/blogservice.service';
import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { finalize, Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input()
  requiredFileType!: string;

  fileName = '';
  uploadProgress!: number|null;
  uploadSub!: Subscription;
  postList$ = this.blogservice.getPostList()
  constructor(private readonly blogservice: BlogserviceService, @Inject(DOCUMENT) document: Document,private http: HttpClient) {

  }
  @ViewChild('myDiv') table!: ElementRef
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.table.nativeElement.style.color = "red"     
  }
  // onFileSelected(event:any) {

  //   const file:File = event.target.files[0];
      
  //   if (file) {
  //       this.fileName = file.name;
  //       const formData = new FormData();
  //       formData.append("thumbnail", file);

  //       const upload$ = this.http.post("/api/thumbnail-upload", formData, {
  //           reportProgress: true,
  //           observe: 'events'
  //       })
  //       .pipe(
  //           finalize(() => this.reset())
  //       );
      
  //       this.uploadSub = upload$.subscribe(event => {
  //         if (event.type == HttpEventType.UploadProgress) {
  //           this.uploadProgress = Math.round(100 * (event.loaded / event.total));
  //         }
  //       })
  //   }
  // }
  // cancelUpload() {
  //   this.uploadSub.unsubscribe();
  //   this.reset();
  // }

  // reset() {
  //   this.uploadProgress = null;
  //   this.uploadSub = ;
  // }

}
