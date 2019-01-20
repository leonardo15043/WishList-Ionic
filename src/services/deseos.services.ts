import { Injectable } from '@angular/core';
import { Lista } from '../models/index';

@Injectable()
export class DeseosService {

  listas: Lista[] = [];

  constructor() {
    this.cargarStorage();
  }

  agregarLista(lista: Lista){
      this.listas.push( lista );
  }

  guardarStorage(){
    localStorage.setItem('data', JSON.stringify( this.listas ));
  }

  cargarStorage(){
    if( localStorage.getItem('data') ){
      this.listas = JSON.parse(localStorage.getItem('data'));
    }else{
      this.listas = [];
    }

  }
}
