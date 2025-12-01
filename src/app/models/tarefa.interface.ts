export interface Tarefa {
  id: number;
  titulo: string;
  descricao?: string;
  dataCriacao: Date;
  dataConclusao?: Date;
  concluida: boolean;
  prioridade: 'baixa' | 'media' | 'alta';
}