import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TipoTransacao, Transacao } from '../modelos/transacao';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-form-nova-transacao',
  imports: [FormsModule, KeyValuePipe],
  templateUrl: './form-nova-transacao.component.html',
  styleUrl: './form-nova-transacao.component.css'
})
export class FormNovaTransacaoComponent {
tipoTransacao = "";
valorTransacao = "";

transacaocriada = output<Transacao>();
tipoTransacaoEnum = TipoTransacao;

  aosubmeter() {
    const transacao = new Transacao(
      this.tipoTransacao as TipoTransacao,
      this.valorTransacao ? parseFloat(this.valorTransacao) : 0 
    );

    this.transacaocriada.emit(transacao);

    this.tipoTransacao = "";
    this.valorTransacao = "";
  }
}
