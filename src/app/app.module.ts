import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componets/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { MiniRadioComponent } from './componets/mini-radio/mini-radio.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { AdminComponent } from './componets/admin/admin.component'
import{HttpClientModule}from '@angular/common/http';
import { EntradaProdutoComponent } from './funcionario/entrada-produto/entrada-produto.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MiniRadioComponent,
    AdminComponent,
    EntradaProdutoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    }),

  ],
  providers: [MiniRadioComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
