import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  protected urlBase: String;
  constructor(protected httpClient: any, protected router: any) {
    this.urlBase = '';
  }
  private getResponse(http: any) {
    return new Promise((resolve: any, reject: any) => {
      http.subscribe(
        res => {
          resolve(res);
        },
        (err: any) => {
          switch (err.status) {
            case 400:
              reject('La informacion enviada no es correcta');
              break;
            case 401:
              reject('Requieres autentificacion ');
              break;
            case 404:
              reject('La informacion no se encontro');
              break;
            case 500:
              reject('Error en el servidor');
              break;
          }
        }
      );
    });
  }
  protected get(url: string): Promise<any> {
    return this.getResponse(this.httpClient.get(`${this.urlBase}${url}`));
  }
}
