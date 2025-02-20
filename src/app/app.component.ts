import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileCardComponent } from './user-profile-card/user-profile-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserProfileCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'user-profile';
}
