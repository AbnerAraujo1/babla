import {  faCircleChevronDown,faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faCircleDot, } from '@fortawesome/free-regular-svg-icons';
import { Component} from '@angular/core';
import {  faCircleChevronUp,  } from '@fortawesome/free-solid-svg-icons';
import {DadosPropService} from '../../services/dados-proponente.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dadosproptela2',
  templateUrl: './dadosproptela2.component.html',
  styleUrls: ['./dadosproptela2.component.css']
})
export class Dadosproptela2Component  {

  faCircleChevronUp = faCircleChevronUp;
  canShow3 = true;
  canShow2=true;
  canShow4=true;
  
  date:any = []
  userID: any;
  
 
  farCircleDot= faCircleDot;
  faCircleChevronDown = faCircleChevronDown;
  faCircleInfo = faCircleInfo;
  constructor(private service: DadosPropService,
             private activatedRoute : ActivatedRoute) {

  }

  ngOnInit(){
    this.userID = this.activatedRoute.snapshot.paramMap.get("id");
    this.getAllRegras();

   
   }

 changeCanShow3(){
  this.canShow3=!this.canShow3;
 }
 changeCanShow2(){
  this.canShow2=!this.canShow2;
 }
 changeCanShow4(){
  this.canShow4=!this.canShow4;
 }
 ocultar(td: any) {
  td.target.parentNode.style.backgroundColor = '#E5DA77';
  
  td.target.parentNode.previousSibling.style.display = 'table-cell';
  td.target.parentNode.previousSibling.previousSibling.style.display = 'none';
  td.target.parentNode.previousSibling.previousSibling.previousSibling.style.display = 'none';
  td.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.style.display = 'none';
  }
 mostrare(td: any) {
  td.target.parentNode.style.backgroundColor = 'white';
  td.target.parentNode.previousSibling.style.display = 'none';
  td.target.parentNode.previousSibling.previousSibling.style.display = 'table-cell';
  td.target.parentNode.previousSibling.previousSibling.previousSibling.style.display = 'table-cell';
  td.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.style.display = 'table-cell';
  }

  getAllRegras() {
    this.service.postData(this.userID).subscribe((response: any) => {
    this.date = response;
     console.log(this.date)

    })}




}


