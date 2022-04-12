import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TimerService } from './timer.service';
import {DOCUMENT } from "@angular/common";
import {QUERY_SELECTOR, SET_INTERVAL} from "./injection";


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [TimerService,
    { provide: DOCUMENT,
    useValue: document,},
    { provide: SET_INTERVAL,
    useValue: setInterval},
    { provide: QUERY_SELECTOR,
      useValue: Element},

]


})
export class AppModule {}
