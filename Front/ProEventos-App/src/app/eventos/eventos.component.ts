import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  viewImages = false;
  eventos: any = [];
  eventosFilter: any = [];
  widthImg: number = 200;
  marginImg: number = 2;

  private _filterList: string = '';
  public get filterList(): string {
    return this._filterList;
  }
  public set filterList(value: string) {
    this._filterList = value;
    this.eventosFilter = this.filterList ? this.filterEvents(this.filterList) : this.eventos;
  }
  filterEvents(filterIn: string): any {
    filterIn = filterIn.toLocaleLowerCase();
    return this.eventos.filter(evento => evento.tema.toLocaleLowerCase().indexOf(filterIn) !== -1 ||
      evento.local.toLocaleLowerCase().indexOf(filterIn) !== -1
    );
  }
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getEventos();
  }

  getEventos(): void {
    this.http.get('https://localhost:5001/api/eventos').subscribe(response => {
      this.eventos = response;
      this.eventosFilter = response;
    }, error => console.log(error));
  }
}
