import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mister-BITcoin';

  selectedPage : string;

  ngOnInit() : void {
    this.selectedPage= 'home';
  }
}
