import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  valorRecebido:any;

  constructor() { }

  ngOnInit(): void {
    this.getEvento
  }

  getEvento(resposta:string){
    console.log(resposta)
    this.valorRecebido = resposta
  }

}
