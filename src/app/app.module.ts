// Módulo principal da aplicação Angular que importa e configura todos os módulos necessários
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Importações dos módulos do Angular Material para componentes de interface
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Importações dos componentes da aplicação
import { AppComponent } from './app.component';
import { ListaTarefasComponent } from './components/lista-tarefas/lista-tarefas.component';
import { FormularioTarefaComponent } from './components/formulario-tarefa/formulario-tarefa.component';
import { ItemTarefaComponent } from './components/item-tarefa/item-tarefa.component';

// Importação das configurações de rota
import { routes } from './app-routing.module';

// Configuração do módulo principal com declarações, imports e bootstrap
@NgModule({
  declarations: [
    AppComponent,
    ListaTarefasComponent,
    FormularioTarefaComponent,
    ItemTarefaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    
    // Módulos do Angular Material
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
