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
import { WorkerDetailComponent } from './_components/worker-detail/worker-detail.component';
import {TabsModule} from 'ngx-bootstrap/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './_components/text-input/text-input.component';
import { AddWorkerComponent } from './_components/add-worker/add-worker.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfWorkersComponent,
    NavComponent,
    WorkerCardComponent,
    WorkerDetailComponent,
    TextInputComponent,
    AddWorkerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass:'toast-bottom-right'
    }),
    TabsModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
