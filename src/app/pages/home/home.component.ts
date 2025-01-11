import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  constructor(private router: Router) {
    console.log(this.router.config); // Log the route configuration
  }

  navigateToOrgReg(){
    console.log("Hello I was clicked");
    this.router.navigate(['/register-org']);
  }
}
