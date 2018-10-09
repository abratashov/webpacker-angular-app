import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'hello-angular',
  template: require('./app.component.html')
})

export class AppComponent {
  name = 'Angular!';

  constructor(private http: HttpClient){}

  changeName() {
    this.http.get('/hello_angular/name').subscribe(data => {
      this.name = data['name'];
    });
  }
}
