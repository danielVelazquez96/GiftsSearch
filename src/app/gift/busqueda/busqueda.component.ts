import { Component, ElementRef, ViewChild } from '@angular/core';
import { GiftService } from '../services/gift.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})



export class BusquedaComponent {
 
  @ViewChild("txtBuscar") txtBuscar!:ElementRef<HTMLInputElement>;



 buscar():void{
  const valor=this.txtBuscar.nativeElement.value;
  if(valor.trim()) this.gifService.buscarGifts(valor)
  this.txtBuscar.nativeElement.value=''
  
 }

 constructor(private gifService:GiftService){}

}
