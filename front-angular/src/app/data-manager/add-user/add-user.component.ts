import { LookBackService } from './../../services/look-back/look-back.service';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observer, Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { USER_FORM, INIT_FORM } from './UserFormlyField.model';
import { User } from 'src/app/services/look-back/look-back.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  /** Modal */
  @ViewChild('content', { static: false }) content: TemplateRef<ViewChild>;
  private modalRef: NgbModalRef;
  private observer: Observer<void>;
  /** Form - Formly */
  public form = new FormGroup({}); // form
  public fields: Array<FormlyFieldConfig> = USER_FORM;
  public model: User = INIT_FORM;
  public options: FormlyFormOptions = {};

  constructor(private modalService: NgbModal, private lookBackService: LookBackService, private toastr: ToastrService) { }

  ngOnInit(): void { }

  public saveUser() {
    this.lookBackService.addUser(this.model).subscribe(() => {
      this.toastr.success('User saved');
      this.modalRef.close();
      this.options.resetModel();
      this.observer.next(), this.observer.complete();
    }, () => {
      this.toastr.error('User not saved');
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
}
