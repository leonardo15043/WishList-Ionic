import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';
import { PendientesPages } from '../pages/pendientes/pendientes.component';
import { TerminadosPages } from '../pages/terminados/terminados.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DeseosService } from '../services/deseos.services';
import { AgregarPage } from '../pages/agregar/agregar.component';
import { ListasComponent } from '../components/listas.component';


import { FiltroCompletadoPipe } from '../pipes/filtro-completado/filtro-completado';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendientesPages,
    TerminadosPages,
    AgregarPage,
    FiltroCompletadoPipe,
    ListasComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendientesPages,
    TerminadosPages,
    AgregarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DeseosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
