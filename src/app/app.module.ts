import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LazyLoadImageModule } from 'ng-lazyload-image';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 4,
  autoplay: { delay: 3000 },
   breakpoints:{ 
    640: { slidesPerView: 2 },
    // 450: { slidesPerView: 1 }
    }
};

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ContentComponent } from './pages/content/content.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    BlogComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadImageModule,
    SwiperModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
