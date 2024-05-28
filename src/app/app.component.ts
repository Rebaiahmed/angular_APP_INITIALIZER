import { Component } from '@angular/core';
import { FeatureToggleService } from './feature-toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_app_initializer';

  constructor(public featureToggleService: FeatureToggleService) {}
}
