import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/folder/dashboard', icon: 'mail' },
    { title: 'Events', url: '/folder/events', icon: 'paper-plane' },
    { title: 'Expense Category', url: '/folder/expense category', icon: 'heart' },
    { title: 'Invoice', url: '/folder/invoice', icon: 'archive' },
    { title: 'Users', url: '/folder/users', icon: 'trash' },
    
  ];
 
  constructor() {}
}
