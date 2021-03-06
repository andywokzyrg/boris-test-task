import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPageComponent } from './list-page/list-page.component';
import { NavMenuComponent } from './shared/components/nav-menu/nav-menu.component';
import { NavItemComponent } from './shared/components/nav-item/nav-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    NavMenuComponent,
    NavItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
