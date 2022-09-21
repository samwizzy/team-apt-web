import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { allIcons, HeroIconModule } from 'ng-heroicon';
import { MaterialModule } from '../material/material.module';

import { AppbarComponent } from './appbar/appbar.component';
import { FooterComponent } from './footer/footer.component';

const components = [AppbarComponent, FooterComponent];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    HeroIconModule.withIcons({ ...allIcons }, { defaultHostDisplay: 'block' }),
  ],
  exports: [...components],
})
export class SharedModule {}
