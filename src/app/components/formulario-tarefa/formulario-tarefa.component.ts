import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tarefa } from '../../models/tarefa.interface';

@Component({
  selector: 'app-formulario-tarefa',
  templateUrl: './formulario-tarefa.component.html',
  styleUrls: ['./formulario-tarefa.component.css']
})
export class FormularioTarefaComponent implements OnInit {
  @Input() tarefa?: Tarefa;
  @Output() salvar = new EventEmitter<Omit<Tarefa, 'id'>>();
  @Output() cancelar = new EventEmitter<void>();

  formulario!: FormGroup;
  modoEdicao = false;

  constructor(private fb: FormBuilder) {}

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

  onCancelar(): void {
    this.cancelar.emit();
  }
}