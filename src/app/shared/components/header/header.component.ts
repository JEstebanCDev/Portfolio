import { Component, OnInit } from '@angular/core';
declare function runGame(): any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    runGame();
  }
}
