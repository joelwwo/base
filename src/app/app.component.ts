import { SettingsService } from 'src/core/services/Settings/settings.service';
import { Component } from '@angular/core';
import { TUnicodeLocaleId } from 'src/core/types/TUnicodeLocaleId';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'Template';
  today = new Date();

  constructor(private settingsService: SettingsService) {}

  setLocale(locateId: TUnicodeLocaleId): void {
    this.settingsService.setUnicodeLocaleId(locateId);
  }
}
