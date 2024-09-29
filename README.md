# Projeto Lista de Músicas - ADS 3º Semestre - Programação Web

Este projeto faz parte do curso de Análise e Desenvolvimento de Sistemas (ADS) no 3º semestre, na disciplina de Programação Web. O objetivo da aplicação é exibir uma lista de músicas com informações detalhadas, utilizando componentes do Bootstrap e consumindo dados de uma API externa.

## Índice

1. [Descrição do Projeto](#descrição-do-projeto)
2. [Funcionalidades](#funcionalidades)
3. [Tecnologias Utilizadas](#tecnologias-utilizadas)
4. [Etapas de Desenvolvimento](#etapas-de-desenvolvimento)
   - [Criação do Projeto Angular](#1-criação-do-projeto-angular)
   - [Configuração e Inicialização do Repositório Git](#2-configuração-e-inicialização-do-repositório-git)
   - [Instalação do Bootstrap no Projeto Angular](#3-instalação-do-bootstrap-no-projeto-angular)
   - [Criação do Componente da Tabela de Músicas](#4-criação-do-componente-da-tabela-de-músicas)
   - [Estrutura HTML do Componente](#estrutura-html-do-componente)
   - [Implementação Inicial com Dados Localizados no Componente](#5-implementação-inicial-com-dados-localizados-no-componente)
   - [Migração para Uso de uma API Externa com JSON Server](#6-migração-para-uso-de-uma-api-externa-com-json-server)
   - [Criação do Serviço Angular para Consumo da API](#7-criação-do-serviço-angular-para-consumo-da-api)
   - [Conectando o Serviço ao Componente](#8-conectando-o-serviço-ao-componente)
   - [Testando a Aplicação](#9-testando-a-aplicação)
   - [Implementação da Função de Remoção de Músicas](#10-implementação-da-função-de-remoção-de-músicas)
5. [Conclusão](#conclusão)
6. [Comandos Úteis](#comandos-úteis)
7. [Links Importantes](#links-importantes)

## Descrição do Projeto

A aplicação consiste em uma lista de músicas com informações detalhadas como nome, artista, ano de lançamento, gênero e preço. Utiliza o **Angular** como framework principal, o **Bootstrap** para estilização e um servidor **JSON** simulado como API para fornecer os dados.

## Funcionalidades

- Exibir uma lista de músicas com detalhes como nome, artista, ano de lançamento, gênero e preço.
- Estilização com **Bootstrap**.
- Consumo de dados de uma API externa simulada via **JSON Server**.
- Possibilidade de remover músicas da lista.

## Tecnologias Utilizadas

- **Angular**
- **Bootstrap**
- **JSON Server** (API externa simulada)

## Etapas de Desenvolvimento

### 1. Criação do Projeto Angular
(1º Commit - Commits on Sep 11, 2024)

1. No terminal, crie um novo projeto Angular com o seguinte comando:

    ```bash
    ng new lista-de-musicas --no-standalone
    ```

### 2. Configuração e Inicialização do Repositório Git

Nesta etapa, configuramos o controle de versão para o projeto, o que permite que as alterações sejam salvas de forma organizada e possam ser compartilhadas com outros colaboradores. Vamos configurar o Git e subir o código para o GitHub.

#### 2.1. Instalando o Git

Se você ainda não tem o Git instalado, faça o download e siga as instruções de instalação:

- [Git - Download](https://git-scm.com/downloads)

#### 2.2. Configurando o Git pela Primeira Vez

Após instalar o Git, é necessário configurá-lo com suas informações de usuário:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@example.com"
```

Essa configuração será usada para identificar as mudanças que você faz no código.

#### 2.3. Inicializando o Repositório

1. No diretório do seu projeto Angular, inicialize um repositório Git:

    ```bash
    git init
    ```

2. Adicione os arquivos do projeto ao repositório:

    ```bash
    git add .
    ```

3. Faça o primeiro commit, que irá salvar o estado atual do seu projeto:

    ```bash
    git commit -m "Primeiro commit - Projeto Lista de Músicas"
    ```

#### 2.4. Criando um Repositório no GitHub

1. Vá até o [GitHub](https://github.com) e crie um novo repositório.
2. Após criar o repositório, copie o link do repositório remoto (por exemplo: `https://github.com/SeuUsuario/Projeto-Lista-De-Musicas.git`).
3. No terminal, conecte o repositório local ao repositório remoto no GitHub:

    ```bash
    git remote add origin https://github.com/SeuUsuario/Projeto-Lista-De-Musicas.git
    ```

4. Agora envie seus arquivos para o GitHub:

    ```bash
    git push -u origin main
    ```

Pronto! Agora seu projeto está salvo no GitHub e você pode compartilhá-lo ou colaborar com outras pessoas.

### 3. Instalação do Bootstrap no Projeto Angular

1. Adicione o **Bootstrap** ao projeto com o seguinte comando:

    ```bash
    ng add @ng-bootstrap/ng-bootstrap
    ```
(Lembre de que deve estar dentro da pasta do seu projeto)

### 4. Criação do Componente da Tabela de Músicas
(2º Commit - Commits on Sep 12, 2024)

Agora vamos criar um componente Angular para exibir a tabela de músicas.

1. Gere o componente `tabela-de-musicas` com o seguinte comando:

    ```bash
    ng g c tabela-de-musicas
    ```

O caminho para o arquivo gerado será:

```plaintext
src/app/tabela-de-musicas/tabela-de-musicas.component.ts
```

### Estrutura HTML do Componente
(3ª Commit - Commits on Sep 12, 2024)

Aqui está a estrutura do arquivo `tabela-de-musicas.component.html`, que exibirá a lista de músicas:

```html
   <table class="table">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Título</th>
                <th scope="col">Nota</th>
                <th scope="col">Artista</th>
                <th scope="col">Gênero</th>
                <th scope="col">Ano</th>
            </tr>
        </thead>
        <tbody>
          <tr *ngFor="let musica of musicas">
            <th scope="row">{{musica.id}}</th>
            <td>{{musica.name}}</td>
            <td>{{musica.note}}</td>
            <td>{{musica.category}}</td>
            <td>{{musica.artist}}</td>
            <td>{{musica.year}}</td>
          </tr>
        </tbody>
     </table>
```

### 5. Implementação Inicial com Dados Localizados no Componente
(Quarto Commit - Commits on Sep 12, 2024)

Inicialmente, a interface `musica` foi definida no arquivo `musicas.ts`, ela cria o objeto Musicas:

```plaintext
src/app/musicas.ts
```

```typescript
export interface musica {
  id: number;
  name: string;
  note: number;
  category: string;
  artist: string;
  year: number;
}
```

Em um primeiro momento, os dados das músicas são armazenados diretamente no componente.

O caminho do arquivo é:

```plaintext
src/app/tabela-de-musicas/tabela-de-musicas.component.ts
```

Aqui está o código:

```typescript
import { musica } from '../musicas';

@Component({
  selector: 'app-tabela-de-musicas',
  templateUrl: './tabela-de-musicas.component.html',
  styleUrls: ['./tabela-de-musicas.component.css']
})
export class TabelaDeMusicasComponent {
  musicas: musica[] = [
    {
      "id": 1,
      "name": "Bohemian Rhapsody",
      "note": 9.99,
      "category": "Rock",
      "artist": "Queen",
      "year": 1975
    },
    {
      "id": 2,
      "name": "Hotel California",
      "note": 9.99,
      "category": "Rock",
      "artist": "Eagles",
      "year": 1976
    },
    // Outros objetos de música...
  ];
}
```


### 6. Migração para Uso de uma API Externa com JSON Server
(5º Commit - Commits on Sep 12, 2024)

1. Instale o **JSON Server** para simular uma API:

    ```bash
    npm install json-server
    ```

2. Crie o arquivo `db.json` na raiz do projeto para armazenar os dados da API :

    ```json
    {
      "musicas": [
        {
          "id": 1,
          "name": "Bohemian Rhapsody",
          "note": 9.99,
          "category": "Rock",
          "artist": "Queen",
          "year": 1975
        },
        {
          "id": 2,
          "name": "Hotel California",
          "note": 9.99,
          "category": "Rock",
          "artist": "Eagles",
          "year": 1976
        }
      ]
    }
    ```

3. Para iniciar o servidor JSON, execute:

    ```bash
    json-server --watch db.json
    ```

### 7. Criação do Serviço Angular para Consumo da API

1. Gere um serviço Angular para consumir os dados da API:

    ```bash
    ng g s musicas
    ```

O arquivo gerado será:

```plaintext
src/app/musicas.service.ts
```

2. No arquivo `musicas.service.ts`, implemente o seguinte código:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { musica } from './musicas';

@Injectable({
  providedIn: 'root'
})
export class MusicasService {
  private apiUrl = 'http://localhost:3000/musicas';

  constructor(private http: HttpClient) {}

  getMusicas(): Observable<musica[]> {
    return this.http.get<musica[]>(this.apiUrl);
  }
}
```

3. Não se esqueça de importar o `HttpClientModule` no `app.module.ts`:

```plaintext
src/app/app.module.ts
```

```typescript
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    // Outros módulos...
  ]
})
export class AppModule { }
```

### 8. Conectando o Serviço ao Componente

Agora, vamos modificar o componente para consumir os dados da API.

O caminho do arquivo é:

```plaintext
src/app/tabela-de-musicas/tabela-de-musicas.component.ts
```

Aqui está o código atualizado:

```typescript
import { Component, OnInit } from '@angular/core';
import { MusicasService } from '../musicas.service';
import { musica } from '../musicas';

@Component({
  selector: 'app-tabela-de-musicas',
  templateUrl: './tabela-de-musicas.component.html',
  styleUrls: ['./tabela-de-musicas.component.css']
})
export class TabelaDeMusicasComponent implements OnInit {
  musicas: musica[] = [];

  constructor(private musicasService: MusicasService) {}

  ngOnInit(): void {
    this.musicasService.getMusicas().subscribe(data => {
      this.musicas = data;
    });
  }
}
```

### 9. Testando a Aplicação

1. Inicie a aplicação Angular com o comando:

    ```bash
    ng serve
    ```

2. Abra o navegador e vá até `http://localhost:4200` para visualizar a tabela de músicas carregada com os dados da API externa.

### 10. Implementação da Função de Remoção de Músicas
(8º Commit - Commits on Sep 13, 2024)
Adicionamos a funcionalidade de remover músicas da lista.

1. **HTML**: No `tabela-de-musicas.component.html`, adicione uma uma coluna de ações e um botão "Remover":

```plaintext
src/app/tabela-de-musicas/tabela-de-musicas.component.html
```
A baixo de "<th scope="col">Ano</th>" acrescente:
```html
<th scope="col">Ações</th>
```

E abaixo de "<td>{{musica.year}}</td>" adicione:
```html
<td><button class="btn btn-danger" (click)="delete(musica)">Remover</button></td>
```

2. **TypeScript**: No `tabela-de-musicas.component.ts`, implemente a função `delete`:

```plaintext
src/app/tabela-de-musicas/tabela-de-musicas.component.ts
```

```typescript
delete(musica: musica) {
  this.musicasService.delete(musica).subscribe({
    next: () => this.loadMusicas()
  });
}
```
(Cuidado com abertura e fechamento de chaves )


3. **Serviço**: No `musicas.service.ts`, implemente o método de remoção:

```plaintext
src/app/musicas.service.ts
```

```typescript
delete(musica: musica): Observable<void> {
  return this.http.delete<void>('http://localhost:3000/musicas/' + musica.id);
}
```

4. **Recarregar a Lista**: Após a remoção, a lista é recarregada com o método `loadMusicas`:

```typescript
loadMusicas(): void {
  this.musicasService.getMusicas().subscribe(data => {
    this.musicas = data;
  });
}
```


### 12. Criação do Componente Formulário de Músicas

Nesta etapa, foi criado um formulário para cadastrar músicas, permitindo ao usuário inserir novos dados como nome, nota, categoria, artista e ano. Além disso, foram configuradas rotas para navegar entre a tabela de músicas e o formulário.

#### 12.1. Criando o Componente do Formulário
(13º Commit - Commits on Sep 19, 2024)

1. Crie o componente **formulario-musicas**:

   ```bash
   ng g c formulario-musicas
   ```

O arquivo gerado será:

```plaintext
src/app/formulario-musicas/formulario-musicas.component.ts
```

2. A estrutura do formulário no arquivo **formulario-musicas.component.html** será:

```plaintext
src/app/formulario-musicas/formulario-musicas.component.html
```

```html
<div class="container">
    <h1>Cadastro de Músicas</h1>
    <div class="mb-3">
        <label for="name" class="form-label">Nome</label>
        <input type="text" class="form-control" id="name" placeholder="Digite o nome da música">
    </div>
    <div class="mb-3">
        <label for="price" class="form-label">Nota</label>
        <input type="number" class="form-control" id="price" placeholder="Digite a nota para a música">
    </div>
    <div class="mb-3">
        <label for="category" class="form-label">Categoria</label>
        <input type="text" class="form-control" id="category" placeholder="Digite a categoria da música">
    </div>
    <div class="mb-3">
        <label for="artist" class="form-label">Artista</label>
        <input type="text" class="form-control" id="artist" placeholder="Digite o artista da música">
    </div>
    <div class="mb-3">
        <label for="year" class="form-label">Ano</label>
        <input type="number" class="form-control" id="year" placeholder="Digite o ano de lançamento da música">
    </div>
    <button type="submit" class="btn btn-primary">Cadastrar</button>
</div>
```

Este formulário permite ao usuário inserir os dados de uma nova música.

#### 12.2. Definindo as Rotas

Agora, vamos configurar as rotas para que o usuário possa navegar entre a página de listagem de músicas e a página de cadastro.

No arquivo **app-routing.module.ts**, adicione as rotas necessárias:

```plaintext
src/app/app-routing.module.ts
```

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelaDeMusicasComponent } from './tabela-de-musicas/tabela-de-musicas.component';
import { FormularioMusicasComponent } from './formulario-musicas/formulario-musicas.component';

const routes: Routes = [
  { path: '', redirectTo:'/musicas', pathMatch:'full' },
  { path: 'musicas', component: TabelaDeMusicasComponent },
  { path: 'musica/:id', component: FormularioMusicasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

Neste exemplo:

- A rota padrão redireciona para a lista de músicas (`/musicas`).
- A rota `/musicas` carrega o componente da **Tabela de Músicas**.
- A rota `/musica/:id` carrega o formulário para editar ou adicionar uma música.

#### 12.3. Adicionando o Outlet de Rotas

No arquivo **app.component.html**, adicione o `<router-outlet>` para renderizar os componentes associados às rotas:

```plaintext
src/app/app.component.html
```

```html
<router-outlet></router-outlet>
```

#### 12.4. Atualizando o Módulo Principal

No arquivo **app.module.ts**, certifique-se de que os componentes e módulos necessários estejam importados:

```plaintext
src/app/app.module.ts
```

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TabelaDeMusicasComponent } from './tabela-de-musicas/tabela-de-musicas.component';
import { FormularioMusicasComponent } from './formulario-musicas/formulario-musicas.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TabelaDeMusicasComponent,
    FormularioMusicasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

#### 12.5. Adicionando Link para Edição na Tabela de Músicas

No arquivo **tabela-de-musicas.component.html**, adicione um link de edição para cada música na tabela, usando o atributo `[routerLink]`:

```plaintext
src/app/tabela-de-musicas/tabela-de-musicas.component.html
```

```html
<table class="table">
    <thead>
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Nota</th>
            <th>Categoria</th>
            <th>Artista</th>
            <th>Ano</th>
            <th>Ações</th>
        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let musica of musicas">
            <th scope="row">{{ musica.id }}</th>
            <td><a [routerLink]="['/musica', musica.id]">{{ musica.name }}</a></td>
            <td>{{ musica.price }}</td>
            <td>{{ musica.category }}</td>
            <td>{{ musica.artist }}</td>
            <td>{{ musica.year }}</td>
            <td><button class="btn btn-danger">Remover</button></td>
        </tr>
    </tbody>
</table>
```
Agora, cada nome de música na tabela será um link para a página de edição/cadastro do formulário.




### Conclusão

Este projeto mostrou como criar uma aplicação Angular estilizada com Bootstrap e consumindo dados de uma API externa simulada com **JSON Server**.

## Comandos Úteis

- `ng serve` - Inicia a aplicação Angular.
- `json-server --watch db.json` - Inicia o servidor JSON.
- `ng add @ng-bootstrap/ng-bootstrap` - Adiciona o Bootstrap ao projeto Angular.

## Links Importantes

