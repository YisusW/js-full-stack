import { LoopBackService } from './../services/loop-back/loop-back.service';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUsersImportComponent } from './list-users-import/list-users-import.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../services/loop-back/loop-back.model';
import { ToastrService } from 'ngx-toastr';
import { EditUserComponent } from './edit-user/edit-user.component';

@Component({
  selector: 'app-data-manager',
  templateUrl: './data-manager.component.html',
  styleUrls: ['./data-manager.component.scss']
})
export class DataManagerComponent implements OnInit {
  @ViewChild('listUsers', { static: true }) listUsers: ListUsersImportComponent;
  @ViewChild('addUser', { static: true }) addUser: AddUserComponent;
  @ViewChild('editUser', { static: true }) editUser: EditUserComponent;

  public users: Array<User> = [];

  constructor(private loopBackService: LoopBackService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  /**
   * @description this method open a modal to see the list of users to import from github
   */
  public importUsers() {
    this.listUsers.open().subscribe(() => this.getUsers());
  }

  /**
   * @description this method open a modal to create a new user
   */
  public addUserClick() {
    this.addUser.open().subscribe(() => this.getUsers());
  }

  private getUsers() {
    this.loopBackService.getUsers().subscribe((users: Array<User>) => {
      this.users = users;
    });
  }

  public deleteUser(id: string) {
    const question = confirm('Are you sure to delete this user?');

    if (!question) { return; }

    this.loopBackService.deleteUset(id).subscribe(
      () => {
        this.toastr.success('User deleted'), this.getUsers();
      }, error => {
        this.toastr.error(JSON.stringify(error));
      }
    );
  }

  public openEditUser(user: User) {
    this.editUser.open(user).subscribe(() => this.getUsers());
  }
}
