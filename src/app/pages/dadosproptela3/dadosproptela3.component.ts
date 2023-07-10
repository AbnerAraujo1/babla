import { DadosPropService } from 'src/app/services/dados-prop.service';
import { Component, OnInit } from '@angular/core';
import { faLink, faCircleChevronUp, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dadosproptela3',
  templateUrl: './dadosproptela3.component.html',
  styleUrls: ['./dadosproptela3.component.css']
})
export class Dadosproptela3Component {

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
 
 
 

}



