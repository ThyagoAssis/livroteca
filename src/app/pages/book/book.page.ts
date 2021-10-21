import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {

  images = [
    {
      img: 'https://www.designcomcafe.com.br/wp-content/uploads/2017/08/capas-de-livros-solo.jpg', title: 'Solo', author: 'Rana Dasguta'
    },
    {
      img: 'https://images-na.ssl-images-amazon.com/images/I/51x2WDFagpL.jpg',  title: 'Quaresma', author: 'Ricardo Magalhães'
    },

    {
      img: 'https://m.media-amazon.com/images/I/41RznpthgpL.jpg',  title: 'História da Música', author: 'Victor Alves'
    }
  ];


  newImagens = [
    {
      img: 'https://www.designcomcafe.com.br/wp-content/uploads/2017/08/capas-de-livros-solo.jpg', title: 'Solo', author: 'Rana Dasguta'
    },
    {
      img: 'https://images-na.ssl-images-amazon.com/images/I/51x2WDFagpL.jpg',  title: 'Quaresma', author: 'Ricardo Magalhães'
    },

    {
      img: 'https://m.media-amazon.com/images/I/41RznpthgpL.jpg',  title: 'História da Música', author: 'Victor Alves'
    }
  ];




  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor() { }

  ngOnInit() {
  }

}
