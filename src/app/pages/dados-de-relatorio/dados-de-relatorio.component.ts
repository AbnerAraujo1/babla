
import { Component } from '@angular/core';
import {  faCircleChevronUp, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import {DadosPropService} from '../../services/dados-proponente.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dados-de-relatorio',
  templateUrl: './dados-de-relatorio.component.html',
  styleUrls: ['./dados-de-relatorio.component.css']
})
export class DadosDeRelatorioComponent {
  faCircleChevronUp = faCircleChevronUp;
  faCircleChevronDown=faCircleChevronDown;
  canShow3 = true;
  canShow2=true;
  date:any = []
  userID: any;
  constructor(private service: DadosPropService,
    private activatedRoute : ActivatedRoute) {

}

ngOnInit(){
  this.userID = this.activatedRoute.snapshot.paramMap.get("id");
  this.getAllRegras();

}
getAllRegras() {
  this.service.postData(this.userID).subscribe((response: any) => {
  this.date = response;
   console.log(this.date)

  })}



 changeCanShow3(){
  this.canShow3=!this.canShow3;
 }
 changeCanShow2(){
  this.canShow2=!this.canShow2;
 }

 
 
  
}
