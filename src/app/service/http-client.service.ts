import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  protected urlBase: string;
 
  constructor(protected httpClient: any, protected router: any) {
    this.urlBase = "";
  }

  private getResponse(http: any) {
    return new Promise((resolve: any, reject: any) => {
      http.subscribe((res) => {
        resolve(res);
      }, (error: any) => {
        switch (error.status) {
          case 400:
            reject('La información enviada no es correcta')
            break;
          case 401:
            reject('La información enviada no es correcta')
            break;
          case 404:
            reject('La información enviada no es correcta')
            break;
          case 500:
            reject('La información enviada no es correcta')
            break;

        }
      }

      )
    })
  }

  protected get(url: string): Promise<any> {
    return this.getResponse(
      this.httpClient.get(`${this.urlBase}${url}`)
    );
  }

}
