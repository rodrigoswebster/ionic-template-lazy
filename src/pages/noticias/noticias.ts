import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Noticia } from '../../model/noticia';
import { NOTICIAS } from '../../config/api.config';
import { DetalheNoticiaPage } from '../detalhe-noticia/detalhe-noticia';

/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html', //este é o view do controller//
})
export class NoticiasPage {

  public noticias: Noticia[] = NOTICIAS; //noticias: variável ; Classe (objeto): Noticia

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  detalheNoticia(noticiaObj: Noticia){
    this.navCtrl.push(DetalheNoticiaPage,{'noticia': noticiaObj}); 
  }

}

/* ngFor: itera um objeto chamado "n"; no caso acima, o comando ngFor repete 3 vezes. 
Posso usar todos os comandos do Angular no ionic: ngFor, ngIf, etc. 
Iteração: repetição. 
*/ 

