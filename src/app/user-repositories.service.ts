import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRepositoriesService {

  private username: string;
  private clientid = '28f9302eb7cf82e4134b';
  private clientsecret = 'b185252e89642341e200aba130253f8162ca6be1';

  constructor(private http:  HttpClient) { 
    console.log('service is now ready');
    this.username = 'ann-wangui';
  }

  getProfileInfo() {
    interface ApiResponse {
      login: string;
    }
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
    //  .pipe(map((res: { json: () => any; }) => res.json()));
  }

  getProfileRepos() {
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
      // .pipe(map(res => res.json()));
  }

  updateProfile(username: string) {
    this.username = username;
  }
}

