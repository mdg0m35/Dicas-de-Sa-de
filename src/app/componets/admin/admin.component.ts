import { CadService } from './../../model/CadService';
import { ServiceService } from './../../services/service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {



  listarDados$!:Observable< CadService[]>;


  constructor(private service: ServiceService) {
    this.listarDados$ = this.service.listarTodos();
   }

  ngOnInit(): void {

  }



}
