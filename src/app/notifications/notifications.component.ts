import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css',
})
export class NotificationsComponent {
  // Array of notifications to display in the notifications component
  notifications = [
    { message: 'New message from support.', read: false },
    { message: 'System update available.', read: true },
    { message: 'Password changed successfully.', read: true },
  ];
}
