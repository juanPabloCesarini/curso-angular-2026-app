import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {
  selectedUser: any;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];  
    if (id) {
      this.getUser(+id);
    }
  }

  getUser(id: number) {
    this.userService.getUserById(id).subscribe({
      next: (user) => {
        this.selectedUser = user;
      },
      error: (error) => {
        console.error('Error fetching user details:', error);
      }
    });
  }
}
