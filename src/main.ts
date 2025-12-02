// Importa polyfills para compatibilidade com navegadores
import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Importa o módulo raiz da aplicação
import { AppModule } from './app/app.module';

// Inicializa a aplicação Angular carregando o AppModule
platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
    // Destrói instância anterior se existir
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

// Tratamento de erro durante a inicialização
}).catch(err => console.error(err));
