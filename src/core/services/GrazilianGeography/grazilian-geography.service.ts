import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, take } from 'rxjs';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root',
})
export class GrazilianGeographyService extends HttpService {
  constructor(http: HttpClient) {
    super(http);
    this.setUrlBase(environment.urlBrazilianGeography);
  }
}
