import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   
   <!-- header -->
  <app-navbar></app-navbar>

  
  <!-- routes get injected here -->
    <router-outlet></router-outlet>
    <!-- footer -->
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'ticketAPP';
}
