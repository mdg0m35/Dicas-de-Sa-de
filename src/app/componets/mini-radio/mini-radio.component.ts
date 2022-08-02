import { Component, OnInit,Output } from '@angular/core';
import { _MatOptgroupBase } from '@angular/material/core';
import { Observable,} from 'rxjs';
import * as moment from 'moment'

@Component({
  selector: 'app-mini-radio',
  templateUrl: './mini-radio.component.html',
  styleUrls: ['./mini-radio.component.css']
})
export class MiniRadioComponent implements OnInit {
 musicaObj = new Audio();
 audioEvent =[
  "ended",
  "error",
  "play",
  "playing",
  "pause",
  "timeupdate",
  "canplay",
  "loadedmetadata",
  "loadstart"
 ];
 indexMusica = 0;
 musicas = [
    {titulo:'Go!', src:'assets/music/Go! - NEFFEX.mp3'},
    {titulo:'Immortal', src:'assets/music/Immortal - NEFFEX.mp3'},
    {titulo:'Tough', src:'assets/music/Tough - NEFFEX.mp3'},
];

 currentTime = '00:00:00';
 duration = '00:00:00';
 seek= 0;
 titulo = '';


  constructor() { }

  ngOnInit(): void {
   this.renderizarMusica(0);
    }

  streamObserver(url:any){
    return new Observable(observer =>{

      this.musicaObj.src = url;
      this.musicaObj.load();
      this.play();





      const handler = (event: Event)=>{
        this.atualizacaoBarra();
        this.mundaMusica();
      }
        this.addEvent(this.musicaObj,this.audioEvent, handler);

      return () =>{

        this.musicaObj.currentTime = 0;
      }
    })
  }


  addEvent(obg:any, events:any, handler:any){
    events.forEach((event: any) => {
    obg.addEventListener(event , handler);
    });
  }

 play(){
  this.musicaObj.play();
  this.trocarDiscoPlay();
}

pause(){
  this.musicaObj.pause();
  this.trocarDiscoPause();
}
anterior(){
  this.renderizarMusica(this.indexMusica --);
  this.play();
}

proximo(){

  this.renderizarMusica(this.indexMusica++);
  this.play();

}

mundaMusica(){
  if (this.currentTime == this.duration){
    this.proximo();
  }
}

tocarMusica(musicaUrl:any){

console.log(musicaUrl)

  this.streamObserver(musicaUrl).subscribe(event =>{

  });

}

renderizarMusica(index: number){
  this.musicaObj.setAttribute('src',this.musicas[index].src);
  this.musicaObj.addEventListener('loadeddata', () => {

  })
  }


  trocarDiscoPlay(){
    const botaoPlay = document.querySelector('.botao-pause') as HTMLInputElement;
    botaoPlay.style.display ='block';
    const botaoPause = document.querySelector('.botao-play') as HTMLInputElement;
    botaoPause.style.display ='none';
    const imagemJogador = document.getElementById("disco") as HTMLInputElement;
    imagemJogador.src = `assets/img/Gif-Vinilo.gif`;

  }

  trocarDiscoPause(){
    const botaoPlay = document.querySelector('.botao-pause') as HTMLInputElement;
    botaoPlay.style.display ='none';

    const botaoPause = document.querySelector('.botao-play') as HTMLInputElement;
    botaoPause.style.display ='block';
    const imagemJogador = document.getElementById("disco") as HTMLInputElement;
    imagemJogador.src = `assets/img/Vinilo.png`;
  }

atualizacaoBarra(){
  this.seek = this.musicaObj.currentTime;
  this.duration = this.timeFormat(this.musicaObj.duration);
  this.currentTime = this.timeFormat(this.musicaObj.currentTime);

  let barra = document.querySelector('progress') as unknown as HTMLInputElement;
  barra.style.width = Math.floor((this.musicaObj.currentTime/this.musicaObj.duration)*100)+'%';


}

  timeFormat(time:number, format="mm:ss"){
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);
  }
}









