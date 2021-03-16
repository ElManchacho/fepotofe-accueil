import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './accueil/header/header.component';
import { ListPostsComponent } from './accueil/list-posts/list-posts.component';
import { UserInterfaceComponent } from './accueil/user-interface/user-interface.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    ListPostsComponent,
    UserInterfaceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
