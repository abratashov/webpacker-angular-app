import { Component } from '@angular/core';

@Component({
  selector: 'hello-angular',
  template: require('./app.component.html')
})

export class AppComponent {
  name = 'Angular!';
}
