import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './shared/component/list.component';
import { TableComponent } from './shared/component/table/table.component';
import { CardComponent } from './shared/component/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TableComponent,
    CardComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
