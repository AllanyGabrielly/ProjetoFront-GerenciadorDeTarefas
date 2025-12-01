import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarefa } from '../../models/tarefa.interface';

@Component({
  selector: 'app-item-tarefa',
  templateUrl: './item-tarefa.component.html',
  styleUrls: ['./item-tarefa.component.css']
})
export class ItemTarefaComponent {
  @Input() tarefa!: Tarefa;
  @Output() toggleConcluida = new EventEmitter<number>();
  @Output() editar = new EventEmitter<Tarefa>();
  @Output() excluir = new EventEmitter<number>();

  onToggleConcluida(): void {
    this.toggleConcluida.emit(this.tarefa.id);
  }

  onEditar(): void {
    this.editar.emit(this.tarefa);
  }

  onExcluir(): void {
    this.excluir.emit(this.tarefa.id);
  }

  getPrioridadeClass(): string {
    return `prioridade-${this.tarefa.prioridade}`;
  }
}