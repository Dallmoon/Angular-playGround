import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <pre>{{data | json}}</pre>
    `,
    styles: []
})
export class AppComponent implements OnInit {
  data = [];

  constructor(private http: HttpClient) {  }

  ngOnInit() {
    const headers = new HttpHeaders()
    // .set('Content-Type', 'application/x-www-form-urlencoded')
    .set('X-MBX-APIKEY', '4YxZc36MXkeY8dk2zyB3WtGzUvjiQEYpXBblWqZoZcoYi8P8dNX97ZineZaShdwp');
    this.http.get<any[]>('https://bkzpm5tkrj.execute-api.ap-northeast-2.amazonaws.com/todos/rich').subscribe(v => this.data = v);



    // const head = new XMLHttpRequest();

    // head.open('GET', 'https://api.binance.com/api/v1/ticker/24hr');
    // head.setRequestHeader('X-MBX-APIKEY', '4YxZc36MXkeY8dk2zyB3WtGzUvjiQEYpXBblWqZoZcoYi8P8dNX97ZineZaShdwp');
    // head.send();

    // // XMLHttpRequest.readyState 프로퍼티가 변경(이벤트 발생)될 때마다 onreadystatechange 이벤트 핸들러가 호출된다.
    // head.onreadystatechange = function (e) {
    //   // readyStates는 XMLHttpRequest의 상태(state)를 반환
    //   // readyState: 4 => DONE(서버 응답 완료)
    //   if (head.readyState !== XMLHttpRequest.DONE) return;
    //   // status는 response 상태 코드를 반환 : 200 => 정상 응답
    //   if(head.status === 200) {
    //     console.log(head.responseText);
    //   } else {
    //     console.log('Error!');
    //   }
    // };
  }



}
