import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TvShow } from '@thirty/api-interfaces';

@Component({
  selector: 'thirty-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.scss']
})
export class TvShowListComponent implements OnInit {
  @Input() tvshows: [TvShow];
  @Output() selected = new EventEmitter<TvShow>();
  @Output() deleted = new EventEmitter<TvShow>();
  constructor() { }

  ngOnInit(): void {
  }

}
