import { Component  } from '@angular/core';
import { GiftService } from '../services/gift.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent  {

  get gifts(){
    return this.gifservice.resultados;
  }

  constructor(private gifservice:GiftService){

  }

}
