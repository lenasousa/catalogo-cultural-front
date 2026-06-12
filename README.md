# Catálogo Cultural Interativo de São Paulo - Front-End

Este repositório contém a camada Front-End (Single Page Application) do projeto de mapeamento e catalogação de espaços e eventos culturais do município de São Paulo. Desenvolvida sob rigorosos padrões de Engenharia de Software, a interface foca-se na usabilidade, modularidade e integração assíncrona com uma API RESTful corporativa.

O sistema foi desenhado para seguir uma navegação hierárquica e intuitiva: Zonas de São Paulo -> Bairros Integrantes -> Catálogo de Eventos Locais, permitindo a descoberta de espaços por meio de filtros dinâmicos de pesquisa.

---

## Objetivos de Desenvolvimento Sustentável (ODS)

A plataforma integra-se diretamente com a Agenda 2030 da ONU, apoiando:
* **ODS 4 (Educação de Qualidade):** Promove o acesso a espaços culturais e pedagógicos.
* **ODS 8 (Trabalho Decente e Crescimento Económico):** Dá visibilidade a artistas e produtores locais.
* **ODS 11 (Cidades e Comunidades Sustentáveis):** Fomenta a ocupação sustentável do tecido urbano.

---

## Tecnologias e Arquitetura

* **Framework:** Angular (v17+)
* **Linguagem:** TypeScript
* **Arquitetura:** Componentes Independentes (Standalone Components)
* **Estilização:** SCSS com encapsulamento de visualização (View Encapsulation), garantindo a inexistência de conflitos de CSS entre páginas.
* **Gestão de Estado e Comunicação:** RxJS (Observables) para consumo assíncrono da API HTTP.
* **Testes Automatizados:** Vitest configurado para testes unitários de componentes e serviços.

---

## Requisitos do Sistema

Para compilar e executar este projeto localmente, é necessário ter instalado:
* Node.js (versão 18.x ou superior)
* Angular CLI (versão 17 ou superior)
* Gestor de pacotes npm

---

## Instruções de Instalação e Execução

1. Clone este repositório e navegue até ao diretório principal:
   cd catalogo-cultural-front

2. Instale as dependências do projeto:
   npm install

3. Inicialize o servidor de desenvolvimento:
   ng serve

4. Aceda à aplicação no seu navegador através do endereço http://localhost:4200.

> **Nota:** Para o pleno funcionamento dos dados na interface, certifique-se de que a API de Back-End, disponibilizada em https://github.com/lenasousa/CatalogoCultural.API, está em execução simultânea na porta esperada (padrão: http://localhost:5162/api/eventos).

---

## Suite de Testes

O projeto possui cobertura de testes unitários com foco na validação de regras de negócio (agrupamento de bairros, filtros de eventos e validação de formulários). Para executar os testes, utilize o comando:

npm run test

---

## Estrutura Principal de Diretórios

src/
├── app/
│   ├── components/
│   │   ├── card-evento/        # Renderização visual dos cards
│   │   └── modal-sugestao/     # Formulário para envio de novos espaços
│   ├── models/
│   │   └── evento.model.ts     # Contratos e tipagem de dados
│   ├── pages/
│   │   ├── bairros/            # Agregação e filtros por bairro
│   │   ├── eventos/            # Listagem, pesquisa textual e detalhes
│   │   └── home/               # Banner e agrupamento de zonas
│   ├── services/
│   │   └── evento.service.ts   # Comunicação HTTP com a API
│   ├── app.component.html      # Estrutura global (Header e Footer)
│   └── app.component.routes.ts # Definição de roteamento
└── styles.scss                 # Estilos macro e resets globais
