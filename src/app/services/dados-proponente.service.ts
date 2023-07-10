import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DadosPropService  {
 
  
  constructor( private http: HttpClient) {
   }
   postData(userID:any) {
    const url = `https://api-services-hml2.digital-segurosunimed.com/gestorfontes/v1/relatorio/${userID}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'x-api-key':'HKuWCYMZMtofiKajV3QN4Z9rmSCKfGQ2xvtptZ85'});
    return this.http.get(url,  { headers });
   
  }


  
 
  
  
}
