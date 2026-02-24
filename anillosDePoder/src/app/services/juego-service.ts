import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class JuegoService {
  private apiUrl = environment.esdlaUrl;

  constructor(private http: HttpClient) {}

  empezarPartida(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}empezarPartida/`);
  }

  obtenerPregunta(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}obtenerPregunta/${id}`);
  }

  comprobarRespuesta(idPregunta: number, respuestaUsuario: number): Observable<boolean> {
    const params = new HttpParams().set('respuestaUsuario', respuestaUsuario.toString());
    return this.http.get<boolean>(`${this.apiUrl}respuesta/${idPregunta}/`, { params });
  }

  actualizarCorrecta(idPartida: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}correcta/${idPartida}/`, {});
  }

  finalizarPartida(idPartida: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}finalizar/${idPartida}/`, {});
  }
}
