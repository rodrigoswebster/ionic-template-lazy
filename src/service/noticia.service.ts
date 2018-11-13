import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Noticia } from "../model/noticia";
import { Injectable } from "@angular/core";
import { APICONFIG } from "../config/api.config";

@Injectable()
export class NoticiaService {

    constructor(private http: HttpClient){ }

    getNoticias(): Observable<Noticia[]>{
        return this.http.get<Noticia[]>(`${APICONFIG.url}/noticias`);
    }

    getNoticia(id:string) : Observable<Noticia> { 
        return this.http.get<Noticia>(`${APICONFIG.url}/noticias/${id}`); /*quando eu clicar na notícia nº1,
        vai aparecer o conteudo da notícia nº1, e assim por diante. O {id} corresponde ao número da noticia */


    }    
}