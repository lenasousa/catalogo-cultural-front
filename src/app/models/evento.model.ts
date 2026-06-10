export interface Evento {
  id?: number;
  nome: string;
  tipo: string;
  bairro: string;
  endereco: string;
  descricao: string;
  zona: string;
  gratuito: boolean;
  valor: string;
  data: string;
  imagem?: string;
  site?: string;
  destaques?: string[];
}
