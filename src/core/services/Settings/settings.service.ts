import { Injectable } from '@angular/core';
import { TUnicodeLocaleId } from 'src/core/types/TUnicodeLocaleId';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private unicodeLocaleId: TUnicodeLocaleId = 'pt-BR';

  getUnicodeLocaleId(): string {
    return this.unicodeLocaleId;
  }

  setUnicodeLocaleId(unicodeLocaleId: TUnicodeLocaleId): string {
    return (this.unicodeLocaleId = unicodeLocaleId);
  }
}
