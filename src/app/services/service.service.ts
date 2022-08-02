import { CadService } from './../model/CadService';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private URL ='http://localhost:8080/file/list';

  constructor(private http: HttpClient) { }


  listarTodos():Observable<CadService[]>{
    return this.http.get<CadService[]>(this.URL).pipe(
    map(retorno => retorno),


    );

  }

}


