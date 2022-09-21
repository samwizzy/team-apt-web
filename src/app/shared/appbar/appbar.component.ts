import { Component, OnInit } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss'],
})
export class AppbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    Aos.init();
  }
}
