import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timingSafeEqual } from 'crypto';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  books = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<[]>('http://www.mocky.io/v2/5e4a85b42f00005d0097d2ab').subscribe(
      (res: any) => {
        this.books = res;
      }
    )
  }
}
