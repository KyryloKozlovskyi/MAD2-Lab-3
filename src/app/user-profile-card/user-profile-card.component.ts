import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile-card',
  imports: [],
  templateUrl: './user-profile-card.component.html',
  styleUrl: './user-profile-card.component.css',
})
export class UserProfileCardComponent {
  // User object with user details to be displayed in the card
  user = {
    name: 'Kyrylo Kozlovskyi',
    email: 'g00425385@atu.ie',
    role: 'Student',
  };
}
