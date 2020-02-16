import { Component, OnInit } from '@angular/core';
import { Contato } from './core/model/contato';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Gerenciador de contatoscls';
  contato = new Contato();
  ngOnInit(): void {
    this.contato = {
      nome: 'Mateus',
      empresa: 'Senior',
      telefone: '(47) 999938915'      
    };
  }

  public mudarDeEmpresaEGanharAumento(){
    const novaEmpresa = window.prompt('Qual a empresa que você vai agora?');
    this.contato.empresa = novaEmpresa;
  }
}
