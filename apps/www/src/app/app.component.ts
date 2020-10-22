import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'nx-sls-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'www';

  constructor(private http: HttpClient) {
    this.http.get('/api/hello-world').subscribe((result: any) => {
      console.log(result);
    });
  }
}
