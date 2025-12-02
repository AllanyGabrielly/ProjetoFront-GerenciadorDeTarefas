// Componente para exibir um item individual de tarefa com ações de interação
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarefa } from '../../models/tarefa.interface';

// Configuração do componente com seletor, template e estilos
@Component({
  selector: 'app-item-tarefa',
  templateUrl: './item-tarefa.component.html',
  styleUrls: ['./item-tarefa.component.css']
})
// Classe do componente com inputs/outputs e métodos de manipulação de tarefa
export class ItemTarefaComponent {
  @Input() tarefa!: Tarefa;
  @Output() toggleConcluida = new EventEmitter<number>();
  @Output() editar = new EventEmitter<Tarefa>();
  @Output() excluir = new EventEmitter<number>();

  // Emite evento para alternar estado de conclusão da tarefa
  onToggleConcluida(): void {
    this.toggleConcluida.emit(this.tarefa.id);
  }
  // Emite evento para editar a tarefa atual
  onEditar(): void {
    this.editar.emit(this.tarefa);
  }
  // Emite evento para excluir a tarefa atual
  onExcluir(): void {
    this.excluir.emit(this.tarefa.id);
  }
  // Retorna classe CSS baseada na prioridade da tarefa para estilização
  getPrioridadeClass(): string {
    return `prioridade-${this.tarefa.prioridade}`;
  }

}
