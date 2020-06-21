import { AddUserComponent } from './add-user/add-user.component';
import { ListUsersImportComponent } from './list-users-import/list-users-import.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-data-manager',
  templateUrl: './data-manager.component.html',
  styleUrls: ['./data-manager.component.scss']
})
export class DataManagerComponent implements OnInit {
  @ViewChild('listUsers', { static: true }) listUsers: ListUsersImportComponent;
  @ViewChild('addUser', { static: true }) addUser: AddUserComponent;

  constructor() { }

  ngOnInit(): void { }

  public importUsers() {
    this.listUsers.open().subscribe();
  }

  public addUserClick() {
    this.addUser.open().subscribe();
  }
}
