import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.services';
import { Lista } from '../../models/index';

@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class PendientesPages  {
  constructor(
    public deseosService:DeseosService
  ) {  }

  listaSeleccionada(lista: Lista){
    console.log(lista);
  }

}
