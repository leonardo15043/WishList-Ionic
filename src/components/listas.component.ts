import { Component, Input } from '@angular/core';
import { DeseosService } from '../services/deseos.services';
import { Lista } from '../models/index';
import { AgregarPage } from '../pages/agregar/agregar.component';
import { NavController, AlertController, ItemSliding } from 'ionic-angular';

@Component({
  selector: 'app-listas',
  templateUrl: 'listas.component.html',
})
export class ListasComponent {

  @Input() terminada: boolean = false;

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

  editarLista( lista:Lista , slidingItem:ItemSliding){

    slidingItem.close();

    const alerta = this.alertCtr.create({
      title: "Editar nombre",
      message: "Editar el nombre de la lista",
      inputs:[{
        name: 'titulo',
        placeholder: 'Nombre de la lista',
        value: lista.titulo
      }],
      buttons:[{
        text: 'Guardar',
        handler: data =>{
          if(data.titulo.length === 0){
            return;
          }

          lista.titulo = data.titulo;
          this.deseosService.guardarStorage();

        }
      }]
    });

    alerta.present();

  }


}
