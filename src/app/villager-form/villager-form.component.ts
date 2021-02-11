import { Component, OnInit } from "@angular/core";
import { VillagersServiceService } from "../villagers-service.service";

@Component({
  selector: "app-villager-form",
  templateUrl: "./villager-form.component.html",
  styleUrls: ["./villager-form.component.css"],
})
export class VillagerFormComponent implements OnInit {
  public name: string;
  public personality: string;
  public gender: string;
  public catchPhrase: string;
  public birthday: string;
  public imageUrl: string;
  public bubbleColor: string;
  public textColor: string;

  constructor(public service: VillagersServiceService) {}

  addVillager() {
    console.log(this.birthday);
    const villager = {
      name: this.name,
      personality: this.personality,
      birthday: this.birthday,
      gender: this.gender,
      "catch-phrase": this.catchPhrase,
      image_uri: this.imageUrl,
      "bubble-color": this.bubbleColor,
      "text-color": this.textColor,
      showMoreInfo: true,
    };

    this.service.addVillager(villager);
  }

  ngOnInit() {}
}
