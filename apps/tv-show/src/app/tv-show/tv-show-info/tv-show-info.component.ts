import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TvShow } from '@thirty/api-interfaces';
import {FormGroup } from '@angular/forms';

@Component({
  selector: 'thirty-tv-show-info',
  templateUrl: './tv-show-info.component.html',
  styleUrls: ['./tv-show-info.component.scss']
})
export class TvShowInfoComponent implements OnInit {
  @Input() tvshowForm;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  starDisplay: number[];

  constructor() { }

  ngOnInit(): void {
    this.starDisplay = [1,1,1,1,1];
  }
}
