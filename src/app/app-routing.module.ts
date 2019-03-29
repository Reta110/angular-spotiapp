import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//ESTAS SON LAS RUTAS IMPORTADAS DESDE OTRO ARCHIVO
import { routes } from './app.routes';


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
