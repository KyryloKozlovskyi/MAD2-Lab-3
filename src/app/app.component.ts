import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileCardComponent } from './user-profile-card/user-profile-card.component';
import { NotificationsComponent } from './notifications/notifications.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfileCardComponent, NotificationsComponent], // Add the imports array
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'user-profile';
}
