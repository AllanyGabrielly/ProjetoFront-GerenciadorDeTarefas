// Componente principal da lista de tarefas com gerenciamento de estado e operações CRUD
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TarefaService } from '../../services/tarefa.service';
import { Tarefa } from '../../models/tarefa.interface';

// Configuração do componente com template e estilos
@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
// Classe do componente que implementa ciclo de vida OnInit para carregar dados
export class ListaTarefasComponent implements OnInit {
  tarefas: Tarefa[] = [];
  carregando = true;
  erroCarregamento = false;

  constructor(
    private tarefaService: TarefaService,
    private router: Router
  ) {}
  // Método do ciclo de vida que carrega as tarefas ao inicializar o componente
  ngOnInit(): void {
    this.carregarTarefas();
  }
  // Carrega a lista de tarefas tratando estados de carregamento e erro
  carregarTarefas(): void {
    this.carregando = true;
    this.erroCarregamento = false;
    
    this.tarefaService.getTarefas().subscribe({
      next: (tarefas) => {
        this.tarefas = tarefas;
        this.carregando = false;
      },
      error: () => {
        this.erroCarregamento = true;
        this.carregando = false;
      }
    });
  }
  // Alterna o estado de conclusão de uma tarefa e atualiza no servidor
  onToggleConcluida(tarefaId: number): void {
    const tarefa = this.tarefas.find(t => t.id === tarefaId);
    if (tarefa) {
      const tarefaAtualizada = {
        ...tarefa,
        concluida: !tarefa.concluida,
        dataConclusao: !tarefa.concluida ? new Date() : undefined
      };
      
      this.tarefaService.atualizarTarefa(tarefaId, tarefaAtualizada).subscribe({
        next: () => {
          const index = this.tarefas.findIndex(t => t.id === tarefaId);
          if (index !== -1) {
            this.tarefas[index] = tarefaAtualizada;
          }
        },
        error: () => {
          console.error('Erro ao atualizar tarefa');
        }
      });
    }
  }
  // Navega para a página de edição da tarefa selecionada
  onEditarTarefa(tarefa: Tarefa): void {
    this.router.navigate(['/editar', tarefa.id]);
  }
  // Exclui uma tarefa após confirmação do usuário e remove da lista local
  onExcluirTarefa(tarefaId: number): void {
    if (confirm('Tem certeza que deseja excluir esta tarefa?')) {
      this.tarefaService.deletarTarefa(tarefaId).subscribe({
        next: () => {
          this.tarefas = this.tarefas.filter(t => t.id !== tarefaId);
        },
        error: () => {
          console.error('Erro ao excluir tarefa');
        }
      });
    }
  }
  // Navega para a página de criação de nova tarefa
  novaTarefa(): void {
    this.router.navigate(['/nova']);
  }
  // Getter que retorna apenas as tarefas pendentes (não concluídas)
  get tarefasPendentes(): Tarefa[] {
    return this.tarefas.filter(t => !t.concluida);
  }
  // Getter que retorna apenas as tarefas concluídas
  get tarefasConcluidas(): Tarefa[] {
    return this.tarefas.filter(t => t.concluida);
  }

}
