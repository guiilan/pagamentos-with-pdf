import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { PdfPageComponent } from './components/pdf-page/pdf-page.component';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';

registerLocaleData(ptBr);
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PdfPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatRadioModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
