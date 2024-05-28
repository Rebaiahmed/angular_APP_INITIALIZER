import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeatureToggleService {

private featureToggles: any = {};

  constructor(private http: HttpClient) {}

  loadFeatureToggles(): Observable<any> {
    return this.http.get('/assets/feature-toggles.json')
    .pipe(
      tap((toggles: any) => {
        this.featureToggles = toggles; // Save the toggles to the service's property
      })
    );
  }

  isFeatureEnabled(featureName: string): boolean {
    console.log('fetaure name',featureName)
    console.log('features',this.featureToggles)
    return this.featureToggles[featureName] === true;
  }
}
