// Definição do componente raiz da aplicação Angular
import { Component } from '@angular/core';

// Configuração do componente com seletor, template e estilos
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// Classe do componente principal da aplicação
export class AppComponent {
  title = 'Gerenciador de Tarefas';
}
