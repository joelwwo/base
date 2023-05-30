import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import environment from 'src/environments/environment';
import { Observable, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GrazilianGeographyService {
  private readonly urlBase = environment.urlBase;

  constructor(private readonly http: HttpClient) {}

  get(resource: string): Observable<any> {
    return this.http.get<unknown>(`${this.urlBase}${resource}`).pipe(take(1));
  }

  post(resource: string, body: any): Observable<any> {
    return this.http
      .post<unknown>(`${this.urlBase}${resource}`, body)
      .pipe(take(1));
  }
  patch(resource: string, body: any): Observable<any> {
    return this.http
      .patch<unknown>(`${this.urlBase}${resource}`, body)
      .pipe(take(1));
  }

  delete(resource: string): Observable<any> {
    return this.http
      .delete<unknown>(`${this.urlBase}${resource}`)
      .pipe(take(1));
  }

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    const headers = new HttpHeaders({
      processData: 'false',
      ContentType: 'multipart/form-data',
    });

    return this.http
      .post(`${this.urlBase}/api/v1/File/Upload`, formData, {
        headers,
      })
      .pipe(take(1));
  }
}
