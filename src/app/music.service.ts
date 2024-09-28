import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { musica } from './musicas';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http:HttpClient) {}
   
  getMusics():Observable<musica[]>{
    return this.http.get<musica[]>('http://localhost:3000/musics');
  }

  delete(musica: musica): Observable<void>{
    return this.http.delete<void>('http://localhost:3000/musics/' + musica.id);
  }

  getMusicasById(id:number):Observable<musica>{
    return this.http.get<musica>('http://localhost:3000/musics/' + id);
  }

  update(musica: musica):Observable<musica>{
    return this.http.put<musica>('http://localhost:3000/musics/' + musica.id, musica);
  }

}


/*
### Descrição do Código

1. **Importações**:
   - `HttpClient`: Importado do módulo `@angular/common/http`, este é o cliente HTTP que permite realizar requisições HTTP (GET, POST, PUT, DELETE, etc.) para se comunicar com servidores e APIs.
   - `Injectable`: Um decorador importado de `@angular/core`, utilizado para marcar a classe `MusicService` como injetável e disponível para ser usada em outros componentes ou serviços do Angular.
   - `Observable`: Importado de `rxjs`, representa um fluxo de dados assíncrono que pode emitir múltiplos valores ao longo do tempo. Usado para lidar com requisições HTTP de forma assíncrona.
   - `musica`: Um tipo (interface ou classe) importado do arquivo local `./musicas`, que define a estrutura de dados das músicas.

2. **@Injectable Decorator**:
   - O decorador `@Injectable` com a propriedade `{ providedIn: 'root' }` indica que o serviço será registrado no root injector. Isso significa que o serviço será um singleton (uma única instância será compartilhada) e estará disponível em toda a aplicação Angular.

3. **Classe `MusicService`**:
   - A classe `MusicService` é definida com um construtor que recebe uma instância de `HttpClient` como dependência. Isso é feito através do padrão de injeção de dependência (Dependency Injection) do Angular.

4. **Método `getMusics()`**:
   - Este método é responsável por buscar uma lista de músicas do backend. Ele faz uma requisição HTTP GET para o endpoint `'http://localhost:3000/musics'`.
   - O método retorna um `Observable` do tipo `musica[]` (um array de objetos do tipo `musica`). Quando a resposta da requisição é recebida, os dados são emitidos como um fluxo pelo `Observable`, que pode ser assincronamente manipulado pelos componentes que chamam este método.

### Resumo
O `MusicService` é um serviço Angular que utiliza o `HttpClient` para fazer uma requisição HTTP GET ao servidor rodando em `http://localhost:3000/musics`. Ele retorna um `Observable` contendo uma lista de músicas (`musica[]`). Este serviço pode ser usado em componentes Angular para obter dados de músicas de forma reativa e assíncrona.
*/