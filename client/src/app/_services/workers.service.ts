import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Zaposlenik } from '../_models/zaposlenik';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {
  baseUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  dohvatiZaposlenike()
  {
    return this.http.get<Zaposlenik[]>(this.baseUrl + 'workers/workers')
  }

  dohvatiZaposlenik(id:number)
  {
    return this.http.get<Zaposlenik>(this.baseUrl + 'workers' + id);
  }

}
