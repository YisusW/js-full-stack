import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataManagerComponent } from './data-manager/data-manager.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { HttpClientModule } from '@angular/common/http';
import { ListUsersImportComponent } from './data-manager/list-users-import/list-users-import.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { AddUserComponent } from './data-manager/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    DataManagerComponent,
    GraphicsComponent,
    WellcomeComponent,
    ListUsersImportComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
