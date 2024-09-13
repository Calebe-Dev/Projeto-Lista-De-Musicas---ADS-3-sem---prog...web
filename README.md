# Projeto Lista de Músicas - ADS 3º Semestre - Programação Web

Este projeto faz parte do curso de Análise e Desenvolvimento de Sistemas (ADS) no 3º semestre, na disciplina de Programação Web. A aplicação consiste em uma tabela que lista músicas com informações detalhadas, aproveitando componentes do Bootstrap e utilizando uma API externa para obter os dados.

## Funcionalidades

- Exibir uma lista de músicas com detalhes como nome, artista, ano de lançamento, categoria e preço.
- Utilizar o Bootstrap para estilização e criação da tabela de músicas.
- Inicialmente, os dados das músicas foram mantidos diretamente no componente TypeScript (`.ts`), mas foram posteriormente migrados para um serviço que consome uma API externa.

## Tecnologias Utilizadas

- Angular
- Bootstrap
- JSON Server (API externa simulada)

## Etapas de Desenvolvimento

### 1. Criação do Projeto Angular

1. No terminal, crie um novo projeto Angular:

```bash
ng new lista-de-musicas --no-standalone
```

### 2. Inicialização do Repositório Git

1. Inicialize um repositório Git e configure o repositório remoto:

```bash
echo "# Projeto-Lista-De-Musicas---ADS-3-sem---prog...web" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Calebe-Dev/Projeto-Lista-De-Musicas---ADS-3-sem---prog...web.git
git push -u origin main
```

### 3. Instalação do Bootstrap no Projeto Angular

1. Adicione o Bootstrap ao projeto Angular:

```bash
ng add @ng-bootstrap/ng-bootstrap
```

### 4. Criação do Componente da Tabela de Músicas

1. Gere um novo componente Angular para exibir a tabela de músicas:

```bash
ng g c tabela-de-musicas
```

### 5. Implementação Inicial com Dados Localizados no Componente

1. Antes de integrar com uma API externa, os dados das músicas foram mantidos diretamente dentro do componente Angular. Abaixo está o código que foi usado no arquivo `tabela-de-musicas.component.ts`:

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
      "price": 9.99,
      "category": "Rock",
      "artist": "Queen",
      "year": 1975
    },
    {
      "id": 2,
      "name": "Hotel California",
      "price": 9.99,
      "category": "Rock",
      "artist": "Eagles",
      "year": 1976
    },
    // Outros objetos de música...
  ];
}
```

2. A interface `musica` foi definida no arquivo `musicas.ts`:

```typescript
export interface musica {
  id: number;
  name: string;
  price: number;
  category: string;
  artist: string;
  year: number;
}
```

### 6. Migração para Uso de uma API Externa com JSON Server

1. Instale o JSON Server, que será usado para criar uma API externa simulada:

```bash
npm install json-server
```

2. Crie um arquivo `db.json` na raiz do projeto para definir os dados que o JSON Server irá fornecer:

```json
{
  "musicas": [
    {
      "id": 1,
      "name": "Bohemian Rhapsody",
      "price": 9.99,
      "category": "Rock",
      "artist": "Queen",
      "year": 1975
    },
    {
      "id": 2,
      "name": "Hotel California",
      "price": 9.99,
      "category": "Rock",
      "artist": "Eagles",
      "year": 1976
    }
    // Outros objetos de música...
  ]
}
```

3. Para iniciar o servidor JSON, execute o seguinte comando no terminal:

```bash
json-server --watch db.json
```

### 7. Criação do Serviço Angular para Consumo da API

1. Gere um novo serviço Angular para gerenciar a lógica de consumo de dados da API:

```bash
ng g s musicas
```

2. No serviço `musicas.service.ts`, importe `HttpClient` e implemente métodos para buscar os dados das músicas:

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

3. Certifique-se de importar `HttpClientModule` no arquivo `app.module.ts`:

```typescript
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    // Componentes...
  ],
  imports: [
    HttpClientModule,
    // Outros módulos...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### 8. Conectando o Serviço com o Componente

1. Modifique o componente `tabela-de-musicas.component.ts` para utilizar o serviço `MusicasService`:

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

2. Abra o navegador e navegue até `http://localhost:4200` para ver a tabela de músicas carregada com os dados da API externa.



### Atualização do README.md

```markdown
### 10. Implementação da Função de Remoção de Músicas

Após a exibição da lista de músicas, foi adicionada a funcionalidade de remoção. Agora, ao lado de cada música, há um botão que permite removê-la da lista. A lógica para essa operação foi implementada tanto no arquivo HTML quanto no arquivo TypeScript do componente.

#### 10.1 Modificação do HTML

Adicionamos um botão "Remover" à tabela de músicas. O botão dispara o evento `(click)` para acionar a função `delete` no componente TypeScript.

No arquivo `tabela-de-musicas.component.html`, adicione o seguinte código dentro do loop da tabela, onde as músicas são exibidas:

```html
<td><button class="btn btn-danger" (click)="delete(musica)">Remover</button></td>
```

Este botão utiliza a classe `btn btn-danger` do Bootstrap para estilização e chama a função `delete` passando como argumento a música selecionada.

#### 10.2 Implementação da Função `delete`

No arquivo `tabela-de-musicas.component.ts`, implemente a função `delete` que irá chamar o serviço responsável por remover a música da lista. Após a remoção, a lista é recarregada para refletir a mudança.

```typescript
delete(musica: musica) {
  this.musicasService.delete(musica).subscribe({
    next: () => this.loadMusicas()
  });
}
```

#### 10.3 Modificação no Serviço `MusicasService`

Para que a função de exclusão funcione corretamente, também é necessário adicionar a função `delete` ao serviço `MusicasService`. Essa função fará uma requisição HTTP DELETE para a API, removendo o item correspondente.

No arquivo `musicas.service.ts`, adicione o seguinte método:

```typescript
  delete(musica: musica): Observable<void>{
   return this.http.delete<void>('http://localhost:3000/musics' + musica.id);
  }
```

Esse método constrói a URL com base no `id` da música e faz a requisição DELETE para remover o item da API.

#### 10.4 Recarga da Lista de Músicas

A função `loadMusicas` já existente é utilizada para recarregar a lista de músicas após a remoção. Isso garante que a tabela seja atualizada dinamicamente sem a necessidade de recarregar a página.

```typescript
loadMusicas(): void {
  this.musicasService.getMusicas().subscribe(data => {
    this.musicas = data;
  });
}
```

### 11. Testando a Função de Remoção

1. Inicie a aplicação com o comando:

```bash
ng serve
```

2. Abra a aplicação no navegador (`http://localhost:4200`) e tente remover uma música da lista clicando no botão "Remover". A música deve ser removida da tabela e o layout atualizado automaticamente.

Essa funcionalidade de remoção torna o sistema mais dinâmico e interativo, permitindo ao usuário gerenciar os itens da lista de forma simples e eficiente.
```

Esse trecho inclui as novas funcionalidades relacionadas à exclusão de músicas, explicando como implementar tanto o botão no HTML quanto a lógica necessária no componente e no serviço TypeScript.



## Conclusão

Este projeto demonstrou como criar uma aplicação Angular usando Bootstrap para estilização e consumindo dados de uma API externa. Começamos com dados locais e, em seguida, avançamos para uma arquitetura mais modular e escalável utilizando serviços e um servidor JSON.

## Comandos Úteis

- `ng serve` - Inicia a aplicação Angular.
- `json-server --watch db.json` - Inicia o servidor JSON.
- `ng add @ng-bootstrap/ng-bootstrap` - Adiciona o Bootstrap ao projeto Angular.

## Links Importantes

- [Repositório no GitHub](https://github.com/Calebe-Dev/Projeto-Lista-De-Musicas---ADS-3-sem---prog...web)
```

Esse README detalha todas as etapas, incluindo a fase inicial onde o array de músicas estava no componente. Dessa forma, ele cobre todo o desenvolvimento do projeto, desde o protótipo inicial até a versão final com a API externa.