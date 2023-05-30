import { Injectable } from '@angular/core';
import { TUnicodeLocaleId } from 'src/core/types/TUnicodeLocaleId';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private unicodeLocaleId: TUnicodeLocaleId = 'pt-BR';

  constructor() {}

  getUnicodeLocaleId(): string {
    return this.unicodeLocaleId;
  }
}
