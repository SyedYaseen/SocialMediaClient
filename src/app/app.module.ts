import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ToastrModule} from 'ngx-toastr'
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { NavComponent } from './nav/nav.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MemberlistComponent } from './members/memberlist/memberlist.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MessagesComponent } from './messages/messages.component';
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import {SharedModule} from "./_modules/shared.module";
import {ListsComponent} from "./lists/lists.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberlistComponent,
    MemberDetailComponent,
    MessagesComponent,
    ListsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        FormsModule,
        RouterModule,
        SharedModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
