import { Component, OnInit } from '@angular/core';
import Aos from 'aos';

import { Product, Faq, Brand } from './home';
import data from 'src/assets/data.json';
import faqData from 'src/assets/faq.json';
import brandData from 'src/assets/brand.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: Product[] = data;
  featured: Product[] = data.slice(2);
  faqs: Faq[] = faqData;
  brands: Brand[] = brandData;

  selectedTab: number = 0;

  constructor() {}

  ngOnInit(): void {
    Aos.init();
  }

  changeAccordionTab(id: number) {
    if (id !== this.selectedTab) {
      this.selectedTab = id;
    } else {
      this.selectedTab = 0;
    }
  }
}
