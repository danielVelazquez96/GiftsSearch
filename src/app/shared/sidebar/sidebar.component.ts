import { Component} from '@angular/core';
import { GiftService } from '../../gift/services/gift.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles:[`

   a{
      display:flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5px;  
      border-color: black;
    }
    a button{
      border:none;
      background: transparent;
      transition: none;
    }
    a.active{
      background:#333;
      border-color: black;
    }
    a.active button{
      color: #fff;
    }
  `]
    
})
export class SidebarComponent {

  get historial():string[]{
    return this.giftService.historial
  }
  get busquedaActiva():string{
    return this.giftService.ultimaBusqueda
  }

  buscarGift(txtBusquedaGif:string):void{
    this.giftService.buscarGifts(txtBusquedaGif);
    console.log(this.busquedaActiva);
  }

  borrarDelHistorial(BusquedaABorrar:string):void{
    this.giftService.borrarGiftHistorial(BusquedaABorrar)
  }

  constructor(private giftService:GiftService){}
}
