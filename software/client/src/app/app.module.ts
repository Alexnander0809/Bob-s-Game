import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';  // Importa el componente aquí
import { ApiService } from './api.service';  // Importa el servicio aquí

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent  // Declara el componente aquí
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
