import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = '';
  userName: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;

  constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService) { }

  ngOnInit() {

    this.photos = this.activatedRoute.snapshot.data.Photos;
    this.userName = this.activatedRoute.snapshot.params.userName;
  }

  loadMore() {
    this.photoService.listFromUserPaginated(this.userName, ++this.currentPage).subscribe(
      photos => {
        this.photos = this.photos.concat(photos);

        if(!photos.length)
          this.hasMore = false;
      }
    )
  }
}
