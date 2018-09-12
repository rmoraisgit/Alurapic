import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';

import { Photo } from 'src/app/photos/photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: Photo[] = [];
  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {

    if (changes.photos)
      this.rows = this.generateRows(this.photos);
  }

  generateRows(photos: Photo[]) {

    const newRows = [];

    for (let index = 0; index < photos.length; index += 3) {

      newRows.push(photos.slice(index, index + 3));
    }

    console.log(newRows);
    return newRows;
  }
}
