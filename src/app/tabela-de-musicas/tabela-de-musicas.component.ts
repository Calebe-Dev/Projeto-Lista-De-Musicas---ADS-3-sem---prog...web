import { Component } from '@angular/core';
import { musica } from '../musicas';
import { MusicService } from '../music.service';
@Component({
  selector: 'app-tabela-de-musicas',
  templateUrl: './tabela-de-musicas.component.html',
  styleUrl: './tabela-de-musicas.component.css'
})
export class TabelaDeMusicasComponent {

  musicas: musica[] =[];
  constructor(private service: MusicService){}

  ngOnInit(){
    this.loadMusicas()
  }

  loadMusicas(){
    this.service.getMusics().subscribe({
      next: data => this.musicas = data
    })
  }


}
/*

### Descrição do Código

1. **Importações**:
   - `Component`: Importado de `@angular/core`, é um decorador utilizado para definir metadados do componente.
   - `musica`: Importado do arquivo `../musicas`, que provavelmente é uma interface ou classe que define a estrutura de dados de uma música.
   - `MusicService`: Importado de `../music.service`, que é o serviço Angular responsável por buscar os dados das músicas a partir de um backend.

2. **@Component Decorator**:
   - O decorador `@Component` é utilizado para definir um componente Angular. Ele possui metadados que incluem:
     - `selector`: O seletor CSS que identifica este componente no HTML. Neste caso, o seletor é `'app-tabela-de-musicas'`.
     - `templateUrl`: O caminho para o arquivo HTML que define o template (estrutura de visualização) deste componente.
     - `styleUrl`: O caminho para o arquivo CSS que define os estilos específicos deste componente.

3. **Classe `TabelaDeMusicasComponent`**:
   - A classe `TabelaDeMusicasComponent` define a lógica para o componente e é responsável por controlar como os dados das músicas são carregados e exibidos.

4. **Propriedade `musicas`**:
   - `musicas` é um array que armazena objetos do tipo `musica`. Ele é inicializado como um array vazio e será preenchido com os dados das músicas que são obtidos do serviço.

5. **Construtor**:
   - O construtor da classe recebe uma instância do serviço `MusicService` como dependência. Isso é feito através do padrão de injeção de dependência (Dependency Injection) do Angular.

6. **Método `ngOnInit()`**:
   - Este é um método de ciclo de vida de um componente Angular. Ele é chamado automaticamente pelo Angular logo após a criação do componente.
   - O método `ngOnInit()` chama o método `loadMusicas()` para carregar os dados das músicas quando o componente é inicializado.

7. **Método `loadMusicas()`**:
   - Este método é responsável por chamar o método `getMusics()` do serviço `MusicService` para buscar os dados das músicas.
   - `getMusics()` retorna um `Observable`, e o método `subscribe` é utilizado para se inscrever neste `Observable` e receber os dados.
   - Quando os dados são recebidos (`next`), eles são atribuídos à propriedade `musicas` do componente, que então pode ser utilizada no template para exibir as músicas na interface do usuário.

### Resumo
O componente `TabelaDeMusicasComponent` exibe uma tabela de músicas obtidas de um backend através de um serviço Angular (`MusicService`). Ele carrega as músicas assim que é inicializado e as armazena em uma propriedade chamada `musicas`, que é então usada no template HTML para exibição. O método `ngOnInit()` é usado para iniciar o carregamento dos dados, e o método `loadMusicas()` faz a requisição HTTP ao backend usando o serviço e atualiza a lista de músicas.
 */