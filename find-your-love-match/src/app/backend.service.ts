import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Parameters } from './parameters';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  backendUrl = 'http://api.findyourlovematch.com';

  constructor(private http: HttpClient) { }

  public saveUserDetails(data: Parameters) {
    return this.http.post('/', data);
  }
}
