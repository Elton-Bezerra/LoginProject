import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';


let baseApiUrl = "http://localhost/PHP-Slim-Restful/api/";

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  postData(credentials, type){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      this.http.post(baseApiUrl+type, JSON.stringify(credentials), {headers: headers})
        .subscribe( (res) => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

}
