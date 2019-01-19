import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.services';
import { Lista } from '../../models/index';
import { NavController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';

@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class PendientesPages  {
  constructor(
    public deseosService:DeseosService,
    private navCtr:NavController
  ) {  }

  listaSeleccionada(lista: Lista){
    console.log(lista);
  }

  agregarLista(){
    this.navCtr.push( AgregarPage );
  }

}
