import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']


})
export class HomeComponent implements OnInit {

  peso!:"";
  altura!:"";
  imc!:any;

  constructor() { }

  ngOnInit(): void {

  }



miniRadio(){
  const url= "mine-Radio"
  open(url,'_blank')
}



calculadoraImcLink(){
  const url= "calculadora-imc"
  open(url,'_blank')
}


calculadoraImc(){
  let imc = 0;
  let alt = parseFloat(this.altura);
  let pes = parseInt(this.peso);
  this.imc =( pes /(alt *alt)).toFixed(2);
  console.log("altura "+this.altura+ " peso "+pes +"  e "+"Altura "+alt)

  if(this.imc <18.5){

    let  situacao =  document.querySelector('h2') as HTMLInputElement;
        situacao.textContent = 'Abaixo do Peso'

        const botaoPause = document.querySelector('h2') as HTMLInputElement;
        botaoPause.style.background ='#00BFFF';

  }
  else if(this.imc <=25){
    let  situacao =  document.querySelector('h2') as HTMLInputElement;
    situacao.textContent = 'Peso ideal'


    const botaoPause = document.querySelector('h2') as HTMLInputElement;
    botaoPause.style.background ='#34eb0b';
    }
  else if(this.imc <=30){
    let  situacao =  document.querySelector('h2') as HTMLInputElement;
    situacao.textContent = 'Levemente acima do Peso'


    const botaoPause = document.querySelector('h2') as HTMLInputElement;
    botaoPause.style.background ='#DAA520';
    }
  else if(this.imc <35){
    let  situacao =  document.querySelector('h2') as HTMLInputElement;
    situacao.textContent =  'Obesidade Grau I'


    const botaoPause = document.querySelector('h2') as HTMLInputElement;
    botaoPause.style.background ='#FFD700';
   }
  else if(this.imc <40){
    let  situacao =  document.querySelector('h2') as HTMLInputElement;
    situacao.textContent = 'Obesidade Grau II (Servera)'


    const botaoPause = document.querySelector('h2') as HTMLInputElement;
    botaoPause.style.background ='#DA70D6';
    }
  else{
    let  situacao =  document.querySelector('h2') as HTMLInputElement;
    situacao.textContent ='Obesidade Grau III (morbida)'


    const botaoPause = document.querySelector('h2') as HTMLInputElement;
    botaoPause.style.background ='#FF1493';

    }



  return imc;
}




botaoImc(){
  let button = document.getElementById('imcCalc')as HTMLInputElement;

  button?.addEventListener('click', function(){

    let container = document.getElementById('imcCal') as HTMLInputElement;

    if(container?.style.display === 'none'){
      container.style.display = 'block';
    }else {
      container.style.display = 'none'
    }

  });
  console.log('teste')
}


}
