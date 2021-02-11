import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { VillagersComponent } from "./villagers/villagers.component";
import { VillagerCardComponent } from "./villager-card/villager-card.component";
import { VillagersCountComponent } from "./villagers-count/villagers-count.component";
import { HttpClientModule } from "@angular/common/http";
import { VillagerFormComponent } from './villager-form/villager-form.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    VillagersComponent,
    VillagerCardComponent,
    VillagersCountComponent,
    VillagerFormComponent,
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
