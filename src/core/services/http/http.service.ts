import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private urlBase = environment.urlBase;

  constructor(private readonly http: HttpClient) {}

  setUrlBase(url: string): void {
    this.urlBase = url;
  }

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
