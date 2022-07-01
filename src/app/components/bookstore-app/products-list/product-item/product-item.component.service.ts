import { Injectable } from "@angular/core";
// import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Book } from "../model/book"; 

@Injectable () 

export class BooksService {
  // private url = 'https://localhost:44382/api/bookstore';
  // httpOptions = {
  //   Header: new HttpHeaders({'content-type': 'application/json'})
  // }

  Livro: Array<Book> = [{
    id: '1',
    name: "Book 1",
    price: 24,
    quantity: 1,
    category: "Action",
    img: 'img1',
  },
  {
    id: '2',
    name: "Book 2",
    price: 50,
    quantity: 1,
    category: "Action",
    img: 'img2',
  },
  {
    id: '3',
    name: "Book 3",
    price: 20,
    quantity: 1,
    category: "Action",
    img: 'img1',
  },
  {
    id: '4',
    name: "Book 4",
    price: 10,
    quantity: 1,
    category: "Action",
    img: 'img3',
  },
  {
    id: '5',
    name: "Book 5",
    price: 15,
    quantity: 1,
    category: "Action",
    img: 'img2',
  }]

  // constructor(private http:HttpClient) {}

  getBook() {
    return this.Livro;
  }

}