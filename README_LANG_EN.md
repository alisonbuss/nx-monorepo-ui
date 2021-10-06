
<h2 align="center">
    Projeto modelo para front-end.
</h2>

<h3 align="center">
    Utilizando um conjunto de ferramentas extensíveis para monorepo com Nx.
</h3>

### Sumário:

- 1.0) Objetivo do projeto.
- 2.0) Pré-requisitos de hardware.
- 3.0) Dependências do ambiente(Desktop).
- 4.0) Dependências do Projeto.
- 5.0) Dependências de Serviços e Recursos Externos.
  - 5.1) Dependências com Serviços de API.
  - 5.2) Dependências com WebSockets.
  - 5.3) Dependências com Asset Bundles.
  - 5.4) Dependências com Sentry(Monitoramento).
- 6.0) Documentação de apoio.
- 7.0) Estrutura do Projeto.
- 8.0) Variáveis de ambiente do projeto.
- 9.0) Executando o projeto.
  - 9.1) Validando as dependências do ambiente Desktop.
  - 9.2) Executando o projeto para o ambiente Desenvolvimento.
  - 9.3) Executando o projeto para o ambiente Desenvolvimento em Docker.
- 10.0) Implantando o projeto para o ambiente de Desenvolvimento.
- 11.0) Implantando o projeto para o ambiente de Teste(QA).
- 12.0) Implantando o projeto para o ambiente de Pré-Prod.
- 13.0) Implantando o projeto para o ambiente de Prod.
- 14.0) Referências.
- 15.0) Licença.


### 1.0) Objetivo do projeto:

*< Descrever o objetivo do projeto... >*

### 2.0) Pré-requisitos de hardware:

Requisitos mínimos de hardware:

- Memória de 100MB de RAM;
- Processador de 1.0 GHz;
- 1 GB de espaço em disco;

Configuração de hardware recomendada para o ambiente de Teste(QA):

- Memória de 200MB de RAM;
- Processador de 1.0 GHz;
- 1 GB de espaço em disco;

Configuração de hardware recomendada para o ambiente de Pré-Prod:

- Memória de 300MB de RAM;
- Processador de 1.5 GHz;
- 1 GB de espaço em disco;

Configuração de hardware recomendada para o ambiente de Prod:

- Memória de 400MB de RAM;
- Processador de 2.0 GHz;
- 1 GB de espaço em disco;

> **Nota:**
> - *Os requisitos de hardware são apenas um exemplo, ainda não foram analisados.*
>

### 3.0) Dependências do ambiente(Desktop):

* **[[Git](https://git-scm.com/)]** 2.25.* ou superior...
* **[[Docker](https://docs.docker.com/)]** 19.03.* ou superior...
* **[[Docker Compose](https://docs.docker.com/compose/)]** 1.25.* ou superior...

> **Nota:**
> - *É necessário ter instalado as dependências citadas acima, para que o projeto funcione.*
> - *A execução desse projeto foi feita através de um **Desktop Ubuntu 20.04.3 LTS (Focal Fossa)**.*
>

### 4.0) Dependências do Projeto:

*< Descrever o ambiente desenvolvimento... >*


### 5.0) Dependências de Serviços e Recursos Externos:

*< Descrever o ambiente externo... >*


### 5.1) Dependências com Serviços de API.

*< Descrever... >*


### 5.2) Dependências com WebSockets.

*< Descrever... >*


### 5.3) Dependências com Asset Bundles.

*< Descrever... >*


### 5.4) Dependências com Sentry(Monitoramento).

*< Descrever... >*


### 6.0) Documentação de apoio:

* **[Documentação oficial do Docker](https://docs.docker.com/get-started/overview/)**.

### 7.0) Estrutura do Projeto:

Descrição dos arquivos e diretorios do projeto:

```text

nx-monorepo-ui.................Pasta do projeto.
.
├── apps
├── libs
├── nx.json
├── package.json
├── package-lock.json
├── README_LANG_EN.md
├── README.md
├── tools
│   ├── generators
│   └── tsconfig.tools.json
├── tsconfig.base.json
└── workspace.json

4 directories, 8 files

```

### 8.0) Variáveis de ambiente do projeto:

Variáveis de ambiente (DEV):
```TEXT
APP_NAME=nx-monorepo-ui
APP_ENVIRONMENT=dev
APP_WORKDIR=/home/app/web
...
```

Variáveis de ambiente (QA):
```TEXT
APP_NAME=nx-monorepo-ui
APP_ENVIRONMENT=qa
APP_WORKDIR=/home/app/web
...
```

Variáveis de ambiente (PRÉ-PROD):
```TEXT
APP_NAME=nx-monorepo-ui
APP_ENVIRONMENT=pre-prod
APP_WORKDIR=/home/app/web
...
```

Variáveis de ambiente (PROD):
```TEXT
APP_NAME=nx-monorepo-ui
APP_ENVIRONMENT=prod
APP_WORKDIR=/home/app/web
...
```

### 9.0) Executando o projeto.

> **Nota:**
> - Antes de executado o projeto pelo terminal, precisamos validar algumas dependências já instaladas no seu **desktop**, para poder assim executar o projeto.

### 9.1) Validando as dependências do ambiente Desktop:

Executando os testes via comando shell:

- **[[Git](https://git-scm.com/)]**
  - Testar através terminal:
    ```bash
    $ git --version
    ```
    Resultado semelhante:
    ```bash
    git version 2.25.1
    ```

- **[[Docker](https://docs.docker.com/)]**
  - Testar através terminal:
    ```bash
    $ docker version
    ```
    Resultado semelhante:
    ```bash
    Client: Docker Engine - Community
      Version:           19.03.8
      API version:       1.40
      Go version:        go1.12.17
    ...
    ```

- **[[Docker Compose](https://docs.docker.com/compose/)]**
  - Testar através terminal:
    ```bash
    $ docker-compose --version
    ```
    Resultado semelhante:
    ```bash
    docker-compose version 1.25.5, build 8a1c60f6
    ```

Ok!!! Se tudo funcionou como o esperado, agora podemos executar o projeto.

### 9.2) Executando o projeto para o ambiente Desenvolvimento:

*< Descrever a execução do projeto... >*


### 9.3) Executando o projeto para o ambiente de Desenvolvimento em Docker:

*< Descrever a execução do projeto no docker... >*


### 10.0) Implantando o projeto para o ambiente de Desenvolvimento.

*< Descrever... >*


### 11.0) Implantando o projeto para o ambiente de Teste(QA).

*< Descrever... >*


### 12.0) Implantando o projeto para o ambiente de Pré-Prod.

*< Descrever... >*


### 13.0) Implantando o projeto para o ambiente de Prod.

*< Descrever... >*


### 14.0) Referências.

*< Descrever... >*


### 15.0) Licença.

*< Descrever... >*

