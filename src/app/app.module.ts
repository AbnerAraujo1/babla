import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RotasComponent } from './shared/rotas/rotas.component';

import { DadosDaPropostaComponent } from './pages/dados-da-proposta/dados-da-proposta.component';
import { DadosDeRelatorioComponent } from './pages/dados-de-relatorio/dados-de-relatorio.component';
import { DadosDevolutivaComponent } from './shared/dados-devolutiva/dados-devolutiva.component';
import { DevolutivaCnpjComponent } from './pages/devolutiva-cnpj/devolutiva-cnpj.component';
import { DevolutivaComponent } from './pages/devolutiva/devolutiva.component';
import { Dadosproptela2Component } from './pages/dadosproptela2/dadosproptela2.component';
import { Dadosproptela3Component } from './pages/dadosproptela3/dadosproptela3.component';
import { Dadosproptela4Component } from './pages/dadosproptela4/dadosproptela4.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RotasComponent,
    DadosDaPropostaComponent,
    DadosDeRelatorioComponent,
    DadosDevolutivaComponent,
    DevolutivaCnpjComponent,
    DevolutivaComponent,
    Dadosproptela2Component,
    Dadosproptela3Component,
    Dadosproptela4Component,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ClipboardModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
