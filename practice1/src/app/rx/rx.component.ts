import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-rx',
  template: `
    <p>
    {{data}}
    </p>
  `,
  styles: []
})
export class RxComponent implements OnInit {
  data;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    const headers = new HttpHeaders()
    .set('X-API-KEY', '1234');

    this.http.get<any>('http://localhost:4500/todos', { headers }).subscribe(v => {
      this.data = v;
    });
  }

}
