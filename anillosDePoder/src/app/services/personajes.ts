import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PersonajesService {
  constructor(private http: HttpClient) {}
  private baseUrl = environment.esdlaUrl;

  getAllPersonajes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }
}
