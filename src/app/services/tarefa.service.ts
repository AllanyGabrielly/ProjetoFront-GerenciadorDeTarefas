// Serviço Angular para operações CRUD de tarefas com comunicação HTTP e dados simulados
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Tarefa } from '../models/tarefa.interface';

// Decorador que torna o serviço injetável em toda a aplicação
@Injectable({
  providedIn: 'root'
})
// Classe do serviço com métodos para manipulação de tarefas via API REST
export class TarefaService {
  private apiUrl = 'http://localhost:3000/tarefas'; // JSON Server
  
   // Dados simulados em caso de falha na API
  private tarefasMock: Tarefa[] = [
    {
      id: 1,
      titulo: 'Estudar Angular',
      descricao: 'Aprender sobre serviços e componentes',
      dataCriacao: new Date(),
      concluida: false,
      prioridade: 'alta'
    }
  ];

  constructor(private http: HttpClient) {}

  // GET para listar todas as tarefas da API
  getTarefas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.apiUrl).pipe(
    );
  }

  // GET para obter uma tarefa específica por ID
  getTarefa(id: number): Observable<Tarefa> {
    return this.http.get<Tarefa>(`${this.apiUrl}/${id}`);
  }

  // POST para criar uma nova tarefa com data de criação atual
  criarTarefa(tarefa: Omit<Tarefa, 'id'>): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.apiUrl, {
      ...tarefa,
      dataCriacao: new Date()
    });
  }

  // PUT para atualizar uma tarefa existente
  atualizarTarefa(id: number, tarefa: Tarefa): Observable<Tarefa> {
    return this.http.put<Tarefa>(`${this.apiUrl}/${id}`, tarefa);
  }

  // DELETE para remover uma tarefa
  deletarTarefa(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
