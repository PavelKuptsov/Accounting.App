// external module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AlertModule, DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { environment } from '../environments/environment';
import { Configuration } from './app.constants';

let modules = [
  AlertModule,
  DatepickerModule,
  BrowserModule,
  FormsModule,
  HttpModule,
  RouterModule,
  AngularFireModule.initializeApp(environment.firebase),
  ToasterModule
];

import { AppComponent } from './app.component';

import { AppHeaderComponent } from './widgets/app-header';
import { MenuAsideComponent } from './widgets/menu-aside';
import { MessagesBoxComponent } from './widgets/messages-box';
import { NotificationBoxComponent } from './widgets/notification-box';
import { TasksBoxComponent } from './widgets/tasks-box';
import { UserBoxComponent } from './widgets/user-box';
import { BreadcrumbComponent } from './widgets/breadcrumb';

let widgets = [
  AppComponent,
  BreadcrumbComponent,
  AppHeaderComponent,
  MenuAsideComponent,
  MessagesBoxComponent,
  NotificationBoxComponent,
  TasksBoxComponent,
  UserBoxComponent
];

import { UserService } from './services/user.service';
import { MessagesService } from './services/messages.service';
import { AuthService } from './services/auth.service';
import { CanActivateGuard } from './services/guard.service';
import { NotificationService } from './services/notification.service';
import { BreadcrumbService } from './services/breadcrumb.service';
import { TransactionService } from './services/transaction.service';
import { AccountService } from './services/account.service';
import { CategoryService } from './services/category.service';

let services = [
  UserService,
  BreadcrumbService,
  MessagesService,
  AuthService,
  CanActivateGuard,
  NotificationService,
  TransactionService,
  AccountService,
  CategoryService,
  Configuration
];

import { HomeComponent } from './pages/home/home.component';
import { PageNumComponent } from './pages/page-num/page-num.component';
import { ClientComponent } from './pages/client/client.component';

let pages = [
  HomeComponent,
  PageNumComponent,
  ClientComponent,
];

// main bootstrap
import { routing } from './app.routes';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    ...widgets,
    ...pages
  ],
  imports: [
    ...modules,
    routing
  ],
  providers: [
    ...services
  ]
})
export class AppModule { }
