import { User } from './../../services/look-back/look-back.model';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observer, Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { USER_FORM } from '../add-user/UserFormlyField.model';
import { LookBackService } from 'src/app/services/look-back/look-back.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  /** Modal */
  @ViewChild('content', { static: false }) content: TemplateRef<ViewChild>;
  private modalRef: NgbModalRef;
  private observer: Observer<void>;
  /** Form - Formly */
  public form = new FormGroup({}); // form
  public fields: Array<FormlyFieldConfig> = USER_FORM;
  public model: User;
  public options: FormlyFormOptions = {};

  constructor(private modalService: NgbModal, private lookBackService: LookBackService, private toastr: ToastrService) { }

  ngOnInit(): void {}

  public saveUser() {
    const user = {...this.model};
    delete user.id;
    this.lookBackService.editUser(this.model.id, user).subscribe(
      () => {
        this.toastr.success('User updated successfully');
        this.modalRef.close();
        this.observer.next(), this.observer.complete();
      }, error => {
        this.toastr.error(JSON.stringify(error));
      }
    );
  }

  /**
   * @description this function init the component with params sended from parts set component
   */
  public open(user: User): Observable<void> {
    this.model = user;
    return new Observable<void>(observer => {
      this.observer = observer;
      this.modalRef = this.modalService.open(this.content, { size: 'lg' });
    });
  }

  public cancel(): void {
    this.modalRef.close();
  }
}
