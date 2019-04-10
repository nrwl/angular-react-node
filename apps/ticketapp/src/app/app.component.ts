import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '@mycompany/api-types';

@Component({
  selector: 'mycompany-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tickets =  this.http.get<Ticket[]>('/api/tickets');

  constructor(private readonly http: HttpClient) {
  }
}
