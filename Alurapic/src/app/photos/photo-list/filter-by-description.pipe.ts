import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';

@Pipe({
    name: 'filterByDescription'
})
export class FilterByDescription implements PipeTransform {

    transform(photos: Photo[], filterDescription: string) {

        filterDescription = filterDescription.trim().toLowerCase();

        if (filterDescription) {
            return photos.filter(photo => photo.description.toLowerCase().includes(filterDescription));
        }
        else {
            return photos;
        }
    }
}