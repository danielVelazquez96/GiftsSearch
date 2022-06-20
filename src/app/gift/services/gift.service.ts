import { HttpClient,HttpParams, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SerachGifsResponse, Gif } from '../interfaces/Gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GiftService {

  private _apiKey: string = '8nwpOopyIWWn6IVzfmmLyYSSoyr6SvJB'
  private servicioUrl:string='https://api.giphy.com/v1/gifs'
  private _historial:string[]=[];
  private _ultimaBusqueda:string='';
  private _historialMaxLength:number=10;

  public resultados:Gif[]=[]


  constructor(private http:HttpClient){

    this._historial=JSON.parse(localStorage.getItem('historial')!)||[]
    this.resultados=JSON.parse(localStorage.getItem('resultados')!)||[]

  }


  get historial(){
    return [...this._historial]
  }
  get ultimaBusqueda(){
    return this._ultimaBusqueda
  }

  buscarGifts(query:string){
    
    query=query.trim().toLowerCase()
    this._ultimaBusqueda=query;
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial=this.historial.splice(0,this._historialMaxLength);

      localStorage.setItem('historial',JSON.stringify(this._historial));
    }

    const params = new HttpParams()
          .set('api_key', this._apiKey)
          .set('limit', '10')
          .set('q', query );
    
    this.http.get<SerachGifsResponse>(`${ this.servicioUrl }/search`, { params } )
    .subscribe( (resp) => {
      this.resultados = resp.data;
      localStorage.setItem('resultados',JSON.stringify(this.resultados));
    });
  }

  borrarGiftHistorial(query:string){
    if(!this._historial.includes(query))return
    const index= this._historial.indexOf(query);
    this._historial.splice(index,1)

    localStorage.setItem('historial',JSON.stringify(this._historial));
  }

}
