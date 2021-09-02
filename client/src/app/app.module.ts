import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown'
import { ToastrModule } from 'ngx-toastr';
import { ListOfWorkersComponent } from './_components/list-of-workers/list-of-workers.component';
import { NavComponent } from './_components/nav/nav.component';
import { WorkerCardComponent } from './_components/worker-card/worker-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfWorkersComponent,
    NavComponent,
    WorkerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass:'toast-bottom-right'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
