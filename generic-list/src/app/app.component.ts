import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListDetailComponent } from '../list-detail/list-detail.component';
import { UserDetailComponent } from '../user/user-detail/user-detail.component';
import { UserListItemComponent } from '../user/user-list-item/user-list-item.component';
import { User } from '../user/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    ListDetailComponent,
    UserDetailComponent,
    UserListItemComponent,
  ],
})
export class AppComponent {
  title = 'generic-list';
  users: User[] = [
    {
      id: 1,
      title: 'First',
    },
    {
      id: 2,
      title: 'Second',
    },
  ];

  addOneUser(): () => User {
    return () => {
      const maxId = Math.max(...this.users.map((u) => u.id));
      return {
        id: maxId + 1,
        title: 'New',
      };
    };
  }
}
