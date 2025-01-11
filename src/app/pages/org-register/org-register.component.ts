import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-org-register',
  imports: [NgOptimizedImage],
  templateUrl: './org-register.component.html',
  styleUrl: './org-register.component.scss'
})
export class OrgRegisterComponent {

  uniqueKey = Date.now(); // Use a unique key

  cacheBuster: string = '';

  ngOnInit() {
    this.cacheBuster = Date.now().toString(); // Generate a unique cache-busting value
  }
}
