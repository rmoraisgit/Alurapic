import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'ap-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() onTyping = new EventEmitter<string>();
  debounce = new Subject<string>();

  constructor() { }

  ngOnInit() {

    this.debounce.pipe(debounceTime(200)).subscribe(filter => this.onTyping.emit(filter));
  }

}
