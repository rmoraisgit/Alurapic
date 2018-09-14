import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PhotoComponent } from 'src/app/photos/photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { SearchComponent } from './photo-list/search/search.component';
import { FilterByDescription } from './photo-list/filter-by-description.pipe';

@NgModule({
    declarations: [
        PhotoComponent,
        PhotoListComponent,
        PhotosComponent,
        SearchComponent,
        FilterByDescription
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ]
})
export class PhotosModule { }