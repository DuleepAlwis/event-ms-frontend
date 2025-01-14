import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomReactiveFormModule } from './form.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CustomReactiveFormModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'eventure-fe';
}
