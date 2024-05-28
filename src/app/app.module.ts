import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeatureToggleService } from './feature-toggle.service';
import { HttpClientModule } from '@angular/common/http';

export function initializeApp(featureToggleService: FeatureToggleService) {
  console.log('ss')
  return () => featureToggleService.loadFeatureToggles().toPromise();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    FeatureToggleService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [FeatureToggleService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
