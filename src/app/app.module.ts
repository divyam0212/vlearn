import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MFRPService } from './components/services/mfrp.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    // FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [MFRPService],
  bootstrap: [AppComponent]
})
export class AppModule { }
// Ng2SearchPipeModule,