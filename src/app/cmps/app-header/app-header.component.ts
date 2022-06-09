import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor() { }
  @Input() selectedPage: string;
  @Output() onSelectPage = new EventEmitter<string>();

  ngOnInit(): void {
  }

}
