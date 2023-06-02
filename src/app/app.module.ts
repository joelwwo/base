import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsService } from 'src/core/services/Settings/settings.service';
import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
import localeEn from '@angular/common/locales/en';
registerLocaleData(localePT);
registerLocaleData(localeEn);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    // { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingsService: SettingsService) =>
        settingsService.getUnicodeLocaleId(),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
