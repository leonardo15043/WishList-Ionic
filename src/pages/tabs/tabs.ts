import { Component } from '@angular/core';


import { PendientesPages } from '../pendientes/pendientes.component';
import { TerminadosPages } from '../terminados/terminados.component';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendientesPages;
  tab2Root = TerminadosPages;

 
  constructor() {

  }
}
