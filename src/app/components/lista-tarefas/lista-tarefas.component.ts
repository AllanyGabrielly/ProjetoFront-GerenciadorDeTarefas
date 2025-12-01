import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TarefaService } from '../../services/tarefa.service';
import { Tarefa } from '../../models/tarefa.interface';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent implements OnInit {
  tarefas: Tarefa[] = [];
  carregando = true;
  erroCarregamento = false;

  constructor(
    private tarefaService: TarefaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarTarefas();
  }

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

  onEditarTarefa(tarefa: Tarefa): void {
    this.router.navigate(['/editar', tarefa.id]);
  }

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

  novaTarefa(): void {
    this.router.navigate(['/nova']);
  }

  get tarefasPendentes(): Tarefa[] {
    return this.tarefas.filter(t => !t.concluida);
  }

  get tarefasConcluidas(): Tarefa[] {
    return this.tarefas.filter(t => t.concluida);
  }
}