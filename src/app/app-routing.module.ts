
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DadosDeRelatorioComponent } from './pages/dados-de-relatorio/dados-de-relatorio.component';
import { DadosDaPropostaComponent } from './pages/dados-da-proposta/dados-da-proposta.component';
import { DevolutivaComponent} from './pages/devolutiva/devolutiva.component';
import { Dadosproptela2Component } from './pages/dadosproptela2/dadosproptela2.component';
import { Dadosproptela3Component } from './pages/dadosproptela3/dadosproptela3.component';
import { Dadosproptela4Component } from './pages/dadosproptela4/dadosproptela4.component';
const routes: Routes =[
  {path: '', component: DadosDeRelatorioComponent },
  {path: 'devolutiva', component: DevolutivaComponent },
  { path: 'dados-da-proposta', component: DadosDaPropostaComponent },
  { path: 'cnpj', component: DadosDeRelatorioComponent, },
  
  { path: 'vidaeprevidenciacoletivacpf', component: Dadosproptela2Component },
  { path: 'mvp', component: Dadosproptela3Component },
  { path: 'mvp/:id', component: Dadosproptela3Component },
  { path: 'vidaeprevidenciaindividualsobrevivencia', component: Dadosproptela4Component }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
