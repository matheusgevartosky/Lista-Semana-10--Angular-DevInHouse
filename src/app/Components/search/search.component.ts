import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() evento: EventEmitter<any> = new EventEmitter<any>();
  public entrada:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  emissor(){
    console.log(this.entrada)
    this.evento.emit(this.entrada)
  }

}
