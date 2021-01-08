import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VillagersComponent } from './villagers/villagers.component';
import { VillagerCardComponent } from './villager-card/villager-card.component';

@NgModule({
  declarations: [
    AppComponent,
    VillagersComponent,
    VillagerCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
