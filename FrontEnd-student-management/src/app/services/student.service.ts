import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = 'http://localhost:3000/students';

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  criarStudent(student: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, student);
  }

  atualizarStudent(id: string, student: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, student);
  }

  deletarStudent(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
