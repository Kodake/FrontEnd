import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../modelos/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private readonly urlBase = "http://localhost:8000/api/v1/inventarios";

  constructor(private http: HttpClient) { }

  listar(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.urlBase}/productos`);
  }

  agregar(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(`${this.urlBase}/productos`, producto);
  }

  obtenerPorId(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.urlBase}/productos/${id}`);
  }

  editar(id: number, producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.urlBase}/productos/${id}`, producto);
  }
  
  eliminar(id: number): Observable<Object> {
    return this.http.delete<Object>(`${this.urlBase}/productos/${id}`);
  }
}
