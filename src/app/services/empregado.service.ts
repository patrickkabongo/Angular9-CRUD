import { Empregado } from './../common/empregado';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpregadoService {

  private baseUrl = 'http://localhost:8080/api/empregados';

  constructor(private httpClient: HttpClient) { }

  getEmployeeList(): Observable<Empregado[]>{
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.empregado)
    );
  }

  createEmployee(empregado: Object): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, empregado);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmployee(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, value);
  } 

}

interface GetResponse{
  _embedded: {
    empregado: Empregado[];
  }
}