import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @ViewChild('myDiv', { static: false }) myDiv: ElementRef;
  @ViewChild('side', { static: false }) side: ElementRef;
  @ViewChild('main', { static: false }) main: ElementRef;

  isTop = true;

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

    },
    {
      url1: 'assets/02.jpg',
      url2: 'assets/01.jpg',
      url: 'assets/02.jpg',
      isFade: false,
      isHover: false,
      isActive: false

    }
  ];

  options = [
    {
      tipo: 'CABELLO',
      items: [
        {
          img: { url: 'assets/opt_01.jpg', id: '' },
          selected: true,
          key: 'otoño1'
        },
        {
          img: { url: 'assets/opt_02.jpg', id: '' },
          selected: false,
          key: 'otoño2'
        },
        {
          img: { url: 'assets/opt_03.jpg', id: '' },
          selected: false,
          key: 'otoño3'
        },
        {
          img: { url: 'assets/opt_03.jpg', id: '' },
          selected: false,
          key: 'otoño3'
        }
      ]
    },
    {
      tipo: 'OJOS',
      items: [
        {
          img: { url: 'assets/opt_01.jpg', id: '' },
          selected: false,
          key: 'azul'
        },
        {
          img: { url: 'assets/opt_01.jpg', id: '' },
          selected: false,
          key: 'verde'
        },
        {
          img: { url: 'assets/opt_01.jpg', id: '' },
          selected: false,
          key: 'rosado'
        }
      ]
    }
  ]



  constructor() { }

  ngAfterViewInit() {
    // console.log(this.myDiv.nativeElement.offsetTop);

    window.addEventListener("scroll", () => {
      let myDiv = this.myDiv.nativeElement;
      let main = this.main.nativeElement;
      let side = this.side.nativeElement;


      if (window.scrollY > (main.offsetTop + main.offsetHeight - side.offsetHeight)) {
        setTimeout(() => {
          this.isTop = false;
        }, 500);
      } else {
        setTimeout(() => {
          this.isTop = true;

        }, 500);
      }

      // if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
      //   this.isTop = false;
      // } else {
      //   this.isTop = true;
      // }
    });
  }

  ngOnInit() {



    // window.addEventListener("scroll", () => {
    //   var elementTarget = this.myDiv.nativeElement;
    //   if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
    //       alert("You've scrolled past the second div");
    //   }
    // });
  }


  holderMouse(index, tipo) {
    console.log('entrooo??')
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

  onSelectOption(i,j) {
    let items = this.options[i].items;
    items.forEach(item => {
      item.selected = false;
    });

    this.options[i].items[j].selected = true;
  }


}
