import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { match } from 'assert';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { resolve } from 'path';
import { DomseguroPipe } from './pipes/domseguro.pipe';

import { NgModule, LOCALE_ID  } from '@angular/core';
import { registerLocaleData } from '@angular/common';

import localePy from '@angular/common/locales/es-PY';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePy, 'es');
registerLocaleData(localePt, 'pt');

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CapitalizadoPipe, DomseguroPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '07MiAppPipe';
  nombre    : string ='Oscar Alvaro';
  nombre2   : string ='oscar coronado';
  lenguaje  : string[]=['sharp','java','python','javaScript']
  PI        :number = Math.PI;
  porcentaje: number= 0.235;
  Salario   : number = 1234.5;
  fecha     : Date= new Date;
  Activar   : boolean = true;
  idioma    : string = 'en';
  videoUrl  : string = 'https://www.youtube.com/embed/wWoQ7PFSYlk';

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(()=> {
      resolve('llego la data');
    }, 4500);
  })
  
}
