import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { BooksService } from './product-item/product-item.component.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  livros: any;
  // bookService: BooksService;
  constructor(private bookaService: BooksService) {
    // this.bookService = bookaService;
  }

  ngOnInit(): void {
    // this.livros = this.bookService.getBook().subscribe(data => {
    //   this.livros = data;
    //   console.log(this.livros);
    // })
    this.livros = this.bookaService.Livro;
    
  }

}
