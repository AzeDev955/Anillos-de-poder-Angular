import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  constructor(private http: HttpClient) {}
  private baseUrl = environment.baseUrl;

  getAllCountries(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}all?fields=name,capital`);
  }
}
