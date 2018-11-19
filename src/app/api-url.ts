import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Api{
  apiURL: string = 'http://localhost:8080/registroactividades/';

  getUrl(): string{
      return this.apiURL;
  }
}