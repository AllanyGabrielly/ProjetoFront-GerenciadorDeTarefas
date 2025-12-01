import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTarefasComponent } from './components/lista-tarefas/lista-tarefas.component';
import { FormularioTarefaComponent } from './components/formulario-tarefa/formulario-tarefa.component';

export const routes: Routes = [
  { path: '', component: ListaTarefasComponent },
  { path: 'nova', component: FormularioTarefaComponent },
  { path: 'editar/:id', component: FormularioTarefaComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }