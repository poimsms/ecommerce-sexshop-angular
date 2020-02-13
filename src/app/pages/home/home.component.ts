import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imgs = [
    {
      url1: 'assets/01.jpg',
      url2: 'assets/02.jpg',
      url: 'assets/01.jpg',
      isFade: false,
      isHover: false,
      isActive: false
    },
    {
      url1: 'assets/01.jpg',
      url2: 'assets/02.jpg',
      url: 'assets/01.jpg',
      isFade: false,
      isHover: false,
      isActive: false

    },
    {
      url1: 'assets/01.jpg',
      url2: 'assets/02.jpg',
      url: 'assets/01.jpg',
      isFade: false,
      isHover: false,
      isActive: false

    },
    {
      url1: 'assets/01.jpg',
      url2: 'assets/02.jpg',
      url: 'assets/01.jpg',
      isFade: false,
      isHover: false,
      isActive: false

    }
  ]

    defaultImage = 'https://www.placecage.com/1000/1000';
    image = 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?fm=jpg';
    

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openPage() {
    this.router.navigateByUrl('content');
  }

  holderMouse(index, tipo) {
    if (tipo == 'enter') {
      this.imgs[index].isActive = true;
    } else {
      this.imgs[index].isActive = false;
    }
  }

  mouseEnter(index) {
    this.imgs[index].isFade = true;
    this.imgs[index].url = this.imgs[index].url2;
    this.imgs[index].isHover = true;
    setTimeout(() => {
      this.imgs[index].isFade = false;
    }, 100);    
  }

  mouseLeave(index) {
    this.imgs[index].isFade = true;
    this.imgs[index].url = this.imgs[index].url1;
    this.imgs[index].isHover = false;
    setTimeout(() => {
      this.imgs[index].isFade = false;
    }, 100);  
  }

}
