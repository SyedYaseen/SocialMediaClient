import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {MemberlistComponent} from "./members/memberlist/memberlist.component";
import {MemberDetailComponent} from "./members/member-detail/member-detail.component";
import {ListsComponent} from "./lists/lists.component";
import {MessagesComponent} from "./messages/messages.component";
import {AuthGuard} from "./guard/auth.guard";
import {ErrorTestComponent} from "./_errors/error-test/error-test.component";
import {NotFoundComponent} from "./_errors/not-found/not-found.component";
import {ServerErrorComponent} from "./_errors/server-error/server-error.component";

const routes: Routes = [
  // {path: login, component: LoginComp},
  {path: '', component: HomeComponent},
  {path: '',
    canActivate: [AuthGuard],
    runGuardsAndResolvers: "always",
    children: [
      {path: 'members', component: MemberlistComponent},
      {path: 'members/:id', component: MemberDetailComponent},
      {path: 'lists', component: ListsComponent},
      {path: 'messages', component: MessagesComponent},
    ]},
  {path:'not-found', component: NotFoundComponent},
  {path:'server-error', component: ServerErrorComponent},
  {path: 'errors', component: ErrorTestComponent},
  {path: '**', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [
    [RouterModule.forRoot(routes)]
  ]
})
export class AppRoutingModule { }
