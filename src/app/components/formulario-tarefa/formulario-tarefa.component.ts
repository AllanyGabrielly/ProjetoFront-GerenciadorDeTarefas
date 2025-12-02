// Componente do formulário para criação-edição de tarefas com comunicação via Input-Output
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tarefa } from '../../models/tarefa.interface';

// Configuração do componente com template e estilos
@Component({
  selector: 'app-formulario-tarefa',
  templateUrl: './formulario-tarefa.component.html',
  styleUrls: ['./formulario-tarefa.component.css']
})
// Classe do componente com inicialização de formulário reativo
export class FormularioTarefaComponent implements OnInit {
  @Input() tarefa?: Tarefa;
  @Output() salvar = new EventEmitter<Omit<Tarefa, 'id'>>();
  @Output() cancelar = new EventEmitter<void>();

  formulario!: FormGroup;
  modoEdicao = false;

  constructor(private fb: FormBuilder) {}

 // Inicialização do formulário com validações e dados da tarefa (se for edição)
  ngOnInit(): void {
    this.modoEdicao = !!this.tarefa;
    
    this.formulario = this.fb.group({
      titulo: [
        this.tarefa?.titulo || '', 
        [Validators.required, Validators.minLength(3)]
      ],
      descricao: [this.tarefa?.descricao || ''],
      prioridade: [
        this.tarefa?.prioridade || 'media', 
        Validators.required
      ]
    });
  }
  
 // Método para envio do formulário com validação e emissão de dados
  onSubmit(): void {
    if (this.formulario.valid) {
      const dadosTarefa = {
        ...this.formulario.value,
        concluida: this.tarefa?.concluida || false,
        dataCriacao: this.tarefa?.dataCriacao || new Date()
      };
      
      this.salvar.emit(dadosTarefa);
    }
  }
 // Método para cancelar a operação (criação/edição)
  onCancelar(): void {
    this.cancelar.emit();
  }

}
