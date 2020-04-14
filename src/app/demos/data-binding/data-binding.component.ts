import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: [
  ]
})
export class DataBindingComponent {
  public contadorClick: number = 0;
  public urlImagem: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/768px-Angular_full_color_logo.svg.png"
  public nome: string = ""

  Contador(){
    this.contadorClick++;
  }

  zerarContador(){
    this.contadorClick = 0;
  }

  // keyUp(event: any){
  //   this.nome = event.target.value;
  // }
}
