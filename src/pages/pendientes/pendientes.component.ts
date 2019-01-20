import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.services';
import { Lista } from '../../models/index';
import { NavController, AlertController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';

@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class PendientesPages  {
  constructor(
    public deseosService:DeseosService,
    private navCtr:NavController,
    private alertCtr: AlertController
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

  agregarLista(){

    const alerta = this.alertCtr.create({
      title: "Nueva lista",
      message: "Nombre de la nueeva lista que desea",
      inputs:[{
        name: 'titulo',
        placeholder: 'Nombre de la lista'
      }],
      buttons:[{
        text: 'Agregar',
        handler: data =>{
          if(data.titulo.length === 0){
            return;
          }
          this.navCtr.push( AgregarPage , {
            titulo: data.titulo
          });
        }
      }]
    });

    alerta.present();

  }

}
