import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observer, Observable } from 'rxjs';
import { User } from 'src/app/services/git-hub/git-hub.model';
import { GitHubService } from 'src/app/services/git-hub/git-hub.service';

@Component({
  selector: 'app-list-users-import',
  templateUrl: './list-users-import.component.html',
  styleUrls: ['./list-users-import.component.scss']
})
export class ListUsersImportComponent implements OnInit {

  @ViewChild('content', { static: false }) content: TemplateRef<ViewChild>;
  private modalRef: NgbModalRef;
  private observer: Observer<string>;
  users: Array<User>;

  constructor(private modalService: NgbModal, private gitHubService: GitHubService) { }

  ngOnInit(): void {
    this.gitHubService.getUsers().subscribe((UserList) => {
      this.users = UserList;
    });
  }

  /**
   * @description this function init the component with params sended from parts set component
   */
  public open(): Observable<string> {

    return new Observable<string>(observer => {
      this.observer = observer;
      this.modalRef = this.modalService.open(this.content, { size: 'lg' });
    });
  }

  public cancel(): void {
    this.modalRef.close();
  }
}
