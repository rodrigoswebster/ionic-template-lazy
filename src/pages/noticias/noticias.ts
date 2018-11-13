import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Noticia } from '../../model/noticia';

import { DetalheNoticiaPage } from '../detalhe-noticia/detalhe-noticia';
import { NoticiaService } from '../../service/noticia.service';

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

  public noticias: Noticia[] = []; //noticias: variável ; Classe (objeto): Noticia

  constructor(public navCtrl: NavController, public navParams: NavParams, public noticiaService : NoticiaService) {

    this.noticiaService.getNoticias()
      .subscribe(response => {
        console.log(response); 
        this.noticias = response;
      })
  }

  detalheNoticia(id:string){
    this.navCtrl.push(DetalheNoticiaPage,{'id':id}); 
  }

}

/* ngFor: itera um objeto chamado "n"; no caso acima, o comando ngFor repete 3 vezes. 
Posso usar todos os comandos do Angular no ionic: ngFor, ngIf, etc. 
Iteração: repetição. 
*/ 

