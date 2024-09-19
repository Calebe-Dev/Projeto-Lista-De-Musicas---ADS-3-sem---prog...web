import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabelaDeMusicasComponent } from './tabela-de-musicas/tabela-de-musicas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormularioMusicasComponent } from './formulario-musicas/formulario-musicas.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaDeMusicasComponent,
    FormularioMusicasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
O código fornecido é um módulo principal Angular chamado `AppModule`. Este módulo define a configuração principal da aplicação Angular, incluindo a definição dos componentes e módulos que ela usa. Aqui está uma explicação detalhada do que o código faz:

### Descrição do Código

1. **Importações**:
   - `NgModule`: Importado de `@angular/core`, é um decorador utilizado para definir um módulo Angular.
   - `BrowserModule`: Importado de `@angular/platform-browser`, é necessário para executar a aplicação Angular em navegadores. Ele fornece serviços essenciais e inicializa a aplicação no navegador.
   - `provideClientHydration`: Importado de `@angular/platform-browser`, fornece suporte para a "hidratação" do lado do cliente em aplicativos renderizados no servidor, como parte de estratégias de renderização universal ou híbrida.
   - `AppRoutingModule`: Importado do arquivo `./app-routing.module`, define as rotas da aplicação.
   - `AppComponent`: Importado do arquivo `./app.component`, é o componente raiz da aplicação.
   - `NgbModule`: Importado de `@ng-bootstrap/ng-bootstrap`, é um módulo que fornece componentes de interface de usuário baseados no Bootstrap para Angular.
   - `TabelaDeMusicasComponent`: Importado do arquivo `./tabela-de-musicas/tabela-de-musicas.component`, é um componente criado pelo desenvolvedor para exibir uma tabela de músicas.
   - `HttpClientModule`: Importado de `@angular/common/http`, permite que a aplicação faça requisições HTTP, como GET, POST, PUT, DELETE, etc.

2. **@NgModule Decorator**:
   - O decorador `@NgModule` é utilizado para definir um módulo Angular. Ele possui metadados que incluem:
     - `declarations`: Um array que lista os componentes, diretivas e pipes pertencentes a este módulo. Neste caso, ele declara o `AppComponent` e o `TabelaDeMusicasComponent`.
     - `imports`: Um array que lista os módulos que serão importados e utilizados por este módulo. Neste caso, ele importa:
       - `BrowserModule` para funcionalidades básicas de execução no navegador.
       - `AppRoutingModule` para configuração de rotas.
       - `NgbModule` para componentes de UI baseados no Bootstrap.
       - `HttpClientModule` para suporte a requisições HTTP.
     - `providers`: Um array que lista os provedores de serviços disponíveis em toda a aplicação. Aqui, `provideClientHydration()` é utilizado para fornecer suporte para a hidratação do lado do cliente.
     - `bootstrap`: Um array que lista o componente raiz que será inicializado ao iniciar o aplicativo. Neste caso, é o `AppComponent`.

### Resumo
O `AppModule` é o módulo raiz da aplicação Angular. Ele importa os módulos necessários, declara os componentes que fazem parte do módulo, e define o componente raiz que será inicializado ao iniciar a aplicação. Este módulo também fornece suporte à hidratação do lado do cliente usando `provideClientHydration()`, o que é útil para aplicações que utilizam renderização universal (SSR). Ele importa o `HttpClientModule` para permitir que a aplicação faça requisições HTTP e o `NgbModule` para fornecer componentes de UI com base no Bootstrap.
*/