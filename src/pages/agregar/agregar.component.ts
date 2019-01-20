import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.services';
import { Lista , ListaItem } from '../../models/index';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarPage {

  lista:Lista;
  nombreItem: string = '';

  constructor(
    public deseosService:DeseosService,
    private navParams: NavParams
  ) {
    const titulo = this.navParams.get('titulo');

    if(this.navParams.get('lista')){
      this.lista = this.navParams.get('lista');
    }else{
      this.lista = new Lista( titulo );
      this.deseosService.agregarLista( this.lista );
    }



  }

  listaSeleccionada(lista: Lista){
    console.log(lista);
  }

  agregarItem(){

    if(this.nombreItem.length === 0){
      return;
    }
    console.log(this.nombreItem);

    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);
    this.deseosService.guardarStorage();
    this.nombreItem = '';
  }

  actualizarTarea( item: ListaItem ){
    item.completado = !item.completado;

    //retorna el numero de items terminados
    const pendientes = this.lista.items.filter(
      itemData =>{
        return !itemData.completado;
    }).length;

    if(pendientes === 0){
      this.lista.terminada = true;
      this.lista.terminadoEn = new Date();
    }else{
      this.lista.terminada = false;
      this.lista.terminadoEn = null;
    }

    this.deseosService.guardarStorage();
  }

  borrar( idx: number ){
    this.lista.items.splice(idx , 1);
    this.deseosService.guardarStorage();
  }
}
