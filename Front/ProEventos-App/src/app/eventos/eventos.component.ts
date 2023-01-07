import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  eventos: any;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getEventos();
  }

  getEventos(): void {
    this.http.get('https://localhost:5001/api/eventos')
    this.eventos = [
      {
        Tema: 'Angular',
        Local: 'Belo Horizonte'
      },
      {
        Tema: '.NET 5',
        Local: 'São Paulo'
      },
      {
        Tema: 'Angular Suas Novidades',
        Local: 'Rio Janeiro'
      },
    ]
  }
}
