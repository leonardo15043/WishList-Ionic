import { Component, Input } from '@angular/core';
import { DeseosService } from '../services/deseos.services';
import { Lista } from '../models/index';
import { AgregarPage } from '../pages/agregar/agregar.component';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-listas',
  templateUrl: 'listas.component.html',
})
export class ListasComponent {

  @Input() terminada: boolean = false;

  constructor(
    public deseosService:DeseosService,
    private navCtr:NavController
  ) {  }

  listaSeleccionada(lista: Lista){

        this.navCtr.push( AgregarPage , {
          titulo: lista.titulo,
          lista: lista
        });

  }

  borrarLista( lista: Lista ){
    this.deseosService.borrarLista( lista );
  }


}
