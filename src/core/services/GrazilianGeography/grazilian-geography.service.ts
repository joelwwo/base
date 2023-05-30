import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpService } from '../Http/http.service';

@Injectable({
  providedIn: 'root',
})
export class GrazilianGeographyService extends HttpService {
  constructor(http: HttpClient) {
    super(http);
    this.setUrlBase(environment.urlBrazilianGeography);
  }
}
