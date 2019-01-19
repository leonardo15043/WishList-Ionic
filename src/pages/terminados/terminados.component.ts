import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.services';

@Component({
  selector: 'page-terminados',
  templateUrl: 'terminados.component.html',
})
export class TerminadosPages  {
  constructor(
    public deseosService:DeseosService
  ) {  }

}
 
