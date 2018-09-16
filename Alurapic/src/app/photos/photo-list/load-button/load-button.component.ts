import { Component, Input } from '@angular/core';

@Component({
    selector: 'ap-load-button',
    templateUrl: 'load-button.component.html'
})
export class LoadButtonComponent{

    @Input() hasMore: boolean = true;
}