# 📋 Gerenciador de Tarefas - Projeto Front-End

# 🎯 Descrição do Projeto

Sistema completo de gerenciamento de tarefas desenvolvido como uma Single Page Application (SPA) em Angular, demonstrando domínio dos principais conceitos do framework. A aplicação permite criar, visualizar, editar, excluir e marcar tarefas como concluídas, seguindo boas práticas de desenvolvimento front-end.

# 🛠 Tecnologias Utilizadas

· Angular 17+ - Framework principal
· Angular Material - Biblioteca de UI components
· TypeScript - Linguagem de programação
· RxJS - Programação reativa
· JSON Server - API REST simulada
· CSS3 - Estilização responsiva
· Angular CLI - Ferramenta de desenvolvimento

# ✅ Requisitos Técnicos Cumpridos

1. Estrutura do projeto Angular

· Projeto organizado com Angular CLI
· Estrutura modular (components, services, models)
· Módulos Angular organizados por funcionalidade
· Arquivo app.module.ts configurado com imports necessários

2. Componentes e comunicação

· Componentes criados:
  · ListaTarefasComponent - Listagem principal
  · ItemTarefaComponent - Item individual
  · FormularioTarefaComponent - Formulário CRUD
· Comunicação via:
  · @Input() - Passagem de dados pai→filho
  · @Output() + EventEmitter - Comunicação filho→pai
  · Serviços compartilhados

3. Diretivas e Bindings

· Diretivas estruturais
· Diretivas de atributo
· Data binding:
  · Interpolação {{ tarefa.titulo }}
  · Property binding [value]="tarefa.descricao"
  · Event binding (click)="onSubmit()"
  · Two-way binding (via formulários reativos)

4. Serviços e Injeção de Dependência

· Serviço dedicado: TarefaService
· Injeção via construtor
· Métodos HTTP implementados:
  · getTarefas() - GET listagem
  · getTarefa(id) - GET com ID
  · criarTarefa() - POST
  · atualizarTarefa() - PUT
  · deletarTarefa() - DELETE

5. Rotas e Navegação

· Configuração no AppRoutingModule
· Navegação programática
· Router outlet no template principal
· Links de navegação na toolbar

6. ✅ Consumo de API (simulada)

· Endpoints consumidos:
  · GET /tarefas - Listar todas
  · GET /tarefas/:id - Detalhe por ID
  · POST /tarefas - Criar nova
  · PUT /tarefas/:id - Atualizar
  · DELETE /tarefas/:id - Excluir
  · JSON Server como backend simulado
  · Tratamento de erros e loading states

7. Boas práticas de UX, Acessibilidade e Mobile First

📱 Mobile First:

· Layout responsivo com breakpoint 768px
· Media queries para adaptação mobile/desktop
· Componentes empilhados verticalmente em mobile
· Botões com largura total em telas pequenas

♿ Acessibilidade:

· Labels adequados em todos os campos
· Texto alternativo para ícones
· Contraste adequado nas cores

✨ UX:

· Feedback visual durante loading
· Estados vazios com call-to-action
· Confirmação para ações destrutivas
· Validação em tempo real de formulários
· Agrupamento por status (pendentes/concluídas)

8. ✅ Utilização de Design System/Biblioteca UI

· Angular Material implementado:
  · MatCard para containers
  · MatButton para ações
  · MatFormField + MatInput para formulários
  · MatSelect para dropdowns
  · MatCheckbox para seleção
  · MatIcon para ícones
  · MatToolbar para header
  · MatProgressSpinner para loading
  
# 🚀 Como Rodar o Projeto

Pré-requisitos

· Node.js (versão 18 ou superior)
· Angular CLI: npm install -g @angular/cli
· JSON Server: npm install -g json-server

# 📸 Capturas de Tela

![Uploading 20251201_162103.jpg…]()

# 📱 Mobile View

1. Lista de tarefas vazia - Tela inicial com botão para criar primeira tarefa
2. Formulário de criação - Campos para título, descrição e prioridade
3. Lista com tarefas - Agrupadas por pendentes/concluídas com indicadores visuais
4. Item de tarefa - Mostrando prioridade e ações (editar/excluir)

# 🔧 Recursos Técnicos Implementados

Validações de Formulário

· Título obrigatório (mínimo 3 caracteres)
· Prioridade com valor padrão "média"
· Botão submit desabilitado para formulários inválidos

Estados da Interface

· Loading durante requisições
· Mensagens de erro específicas
· Estado vazio com call-to-action
· Feedback visual para ações

Persistência de Dados

· Data de criação automática
· Data de conclusão ao marcar tarefa
· IDs únicos para cada tarefa
· Persistência via JSON Server
