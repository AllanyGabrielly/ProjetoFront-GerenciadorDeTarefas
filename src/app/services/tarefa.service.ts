import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Tarefa } from '../models/tarefa.interface';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private apiUrl = 'http://localhost:3000/tarefas'; // JSON Server
  
  // Dados mock para fallback
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

  // GET - Listar todas as tarefas
  getTarefas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.apiUrl).pipe(
      // Fallback para dados mock se a API falhar
      // catchError(() => of(this.tarefasMock))
    );
  }

  // GET - Obter tarefa por ID
  getTarefa(id: number): Observable<Tarefa> {
    return this.http.get<Tarefa>(`${this.apiUrl}/${id}`);
  }

  // POST - Criar nova tarefa
  criarTarefa(tarefa: Omit<Tarefa, 'id'>): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.apiUrl, {
      ...tarefa,
      dataCriacao: new Date()
    });
  }

  // PUT - Atualizar tarefa existente
  atualizarTarefa(id: number, tarefa: Tarefa): Observable<Tarefa> {
    return this.http.put<Tarefa>(`${this.apiUrl}/${id}`, tarefa);
  }

  // DELETE - Remover tarefa
  deletarTarefa(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}