import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { allIcons, HeroIconModule } from 'ng-heroicon';
import { MaterialModule } from '../material/material.module';

import { FeaturesRoutingModule } from './features-routing.module';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    ProductComponent,
    AboutComponent,
    BlogComponent,
    ReviewsComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    MaterialModule,
    HeroIconModule.withIcons({ ...allIcons }, { defaultHostDisplay: 'block' }),
  ],
})
export class FeaturesModule {}
