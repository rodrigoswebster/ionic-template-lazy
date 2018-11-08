import {Noticia} from "../model/noticia"; 

//NOTICIAS = array; Noticias = classe //

export const NOTICIAS: Noticia[] = [ 
    {
        id:'1', 
        titulo:'Plano de saúde individual terá nova regra de reajuste...',
        conteudo:'A Agencia de Saude Suplementar (ANS) colocou...', 
        imagem: 'img1.jpg'
    }, 

    {
        id:'2', 
        titulo:'Bolsonaro diz que pretende anunciar o Ministério...',
        conteudo:'A Agencia de Saude Suplementar (ANS) colocou...', 
        imagem: 'img2.jpg'
    },

    {
        id:'3', 
        titulo:'Moro planeja replicar força-tarefa da Lava-Jato no combate ao crime organizado',
        conteudo:'Magistrado defendeu operações com agentes infiltrados', 
        imagem: 'img3.jpg'
    }

/*No typescript, eu declaro a variável como: 
export class nome_da_classe { 
    atributo1: string; 
    atributo2: string;
    (...) 
    }
 Os atributos são declarados como string; ao declarar uma classe, obrigatoriamente
 a 1ª letra é maiuscula; se o atributo tiver um nome com mais de uma palavra, a primeira palavra
 é toda em minusculas, seguida pela 1ª letra maiuscula da segunda palavra. 
 Declaração de variáveis. 
 Em variaveis constantes, seu valor nao poderá ser alterado. 
 JSON: atualmente, ha 2 linguagens para troca de dados entre cliente e servidor: 
 XML: troca de dados entre 2 dispositivos (servidor/cliente ou servidor/servidor). Permite a
 comnicação entre 2 sistemas distintos. 
 Arquivos XML: trabalham com tags, que seguem as regras do sistema. Ex: um sistema pode ser em 
 JAVA, por exemplo, e o outro em PHP. Ex: o XML faz a conexao entre sistemas. 
 JSON: muito mais leve que o XML. O XML está caindo em desuso. Ex: ionic, entre outros, trabalham 
 com base em JSON. 
 XML: arquivos com tamanho muito grande. Por isso, entre outras razoes, está caindo em desuso. 




 */ 


]