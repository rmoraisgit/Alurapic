import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = '';
  userName: string = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.photos = this.activatedRoute.snapshot.data.Photos;
    this.userName = this.activatedRoute.snapshot.params.userName;
  }
}
