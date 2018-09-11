import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

export class PhotoListResolver implements Resolve<Observable<Photo[]>> {

    constructor(private photoService: PhotoService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        const userName = route.params.userName;

        // return this.photoService.listFromUser(userName);
        return this.photoService.listFromUserPaginated(userName, 1);
    }
}