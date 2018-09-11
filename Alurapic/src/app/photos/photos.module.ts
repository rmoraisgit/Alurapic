import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PhotoComponent } from 'src/app/photos/photo/photo.component';

@NgModule({
    declarations: [
        PhotoComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ]
})
export class PhotosModule { }