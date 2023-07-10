import { DadosPropService } from 'src/app/services/dados-prop.service';
import { Component, OnInit } from '@angular/core';
import { faLink, faCircleChevronUp, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dadosproptela4',
  templateUrl: './dadosproptela4.component.html',
  styleUrls: ['./dadosproptela4.component.css']
})
export class Dadosproptela4Component {
  faLink = faLink;
  faCircleChevronUp = faCircleChevronUp;
  faCircleChevronDown=faCircleChevronDown;

  canShow3 = true;

 changeCanShow3(){
  this.canShow3=!this.canShow3;
 }
  user!:any[];
  constructor(private service:DadosPropService) {}

  ngOnInit(){
    this.service.onSubmit();

  }
  dataAval:string= "20/04/12";
  nProposta: string="GF22/0001"
  produto: string="Previdência Individual"
  cpf: string ="312.286.988-00"
  nome: string="Marcos Oliveira Morais"
  vinculoCnpj: string="02"
}


