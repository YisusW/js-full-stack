import { User } from 'src/app/services/loop-back/loop-back.model';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observer, Observable } from 'rxjs';
import { User as GitHubUser } from 'src/app/services/git-hub/git-hub.model';
import { GitHubService } from 'src/app/services/git-hub/git-hub.service';
import { LoopBackService } from 'src/app/services/loop-back/loop-back.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-users-import',
  templateUrl: './list-users-import.component.html',
  styleUrls: ['./list-users-import.component.scss']
})
export class ListUsersImportComponent implements OnInit {

  @ViewChild('content', { static: false }) content: TemplateRef<ViewChild>;
  private modalRef: NgbModalRef;
  private observer: Observer<void>;
  users: Array<GitHubUser>;

  constructor(
    private modalService: NgbModal,
    private gitHubService: GitHubService,
    private loopBackService: LoopBackService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.gitHubService.getUsers().subscribe((UserList) => {
      this.users = UserList;
    });
  }

  /**
   * @description this function init the component with params sended from parts set component
   */
  public open(): Observable<void> {

    return new Observable<void>(observer => {
      this.observer = observer;
      this.modalRef = this.modalService.open(this.content, { size: 'lg' });
    });
  }

  public cancel(): void {
    this.modalRef.close();
  }

  /**
   * @description transfor users to send the array to api
   * then, if service save data successfully the modal is closed and show a grean message
   * else show a message error that return API
   */
  public saveDataImport() {
    const usersToImport = [];
    for (const user of this.users) {
      usersToImport.push(this.getUsersModel(user));
    }

    this.loopBackService.importUsers(usersToImport).subscribe(
      () => {
        this.toastr.success('Data imported successfully');
        this.modalRef.close();
        this.observer.next(), this.observer.complete();
      }, error => {
        this.toastr.error(JSON.stringify(error));
      }
    );
  }

  /**
   * @description transform the user to type like api need it. GitHubUser has other properties
   */
  private getUsersModel(user: GitHubUser): User {
    return {
      login: user.login,
      link: user.url,
      site_admin: user.site_admin,
      type: user.type
    };
  }
}
