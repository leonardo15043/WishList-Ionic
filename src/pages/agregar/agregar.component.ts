import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.services';
import { Lista } from '../../models/index';

@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarPage {
  constructor(
    public deseosService:DeseosService
  ) {  }

  listaSeleccionada(lista: Lista){
    console.log(lista);
  }
}
