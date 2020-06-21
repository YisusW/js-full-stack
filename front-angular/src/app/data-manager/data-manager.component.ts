import { AddUserComponent } from './add-user/add-user.component';
import { ListUsersImportComponent } from './list-users-import/list-users-import.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LookBackService } from '../services/look-back/look-back.service';
import { User } from '../services/look-back/look-back.model';

@Component({
  selector: 'app-data-manager',
  templateUrl: './data-manager.component.html',
  styleUrls: ['./data-manager.component.scss']
})
export class DataManagerComponent implements OnInit {
  @ViewChild('listUsers', { static: true }) listUsers: ListUsersImportComponent;
  @ViewChild('addUser', { static: true }) addUser: AddUserComponent;

  public users: Array<User> = [];

  constructor(private lookBackService: LookBackService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  public importUsers() {
    this.listUsers.open().subscribe();
  }

  public addUserClick() {
    this.addUser.open().subscribe(() => this.getUsers());
  }

  private getUsers() {
    this.lookBackService.getUsers().subscribe((users: Array<User>) => {
      this.users = users;
    });
  }

  public deleteUser() {
    const question = confirm('Are you sure to delete this user?');

    if (!question) { return; }
  }
}
