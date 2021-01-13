import { Component, OnInit } from "@angular/core";
import { VillagersServiceService } from "../villagers-service.service";

interface Villager {
  id: number;
  name: string;
  personality: string;
  birthday: Date;
  gender: String;
  "catch-phrase": string;
  image_uri: string;
  "bubble-color": string;
  "text-color": string;
  showMoreInfo: true;
}

@Component({
  selector: "app-villagers",
  templateUrl: "./villagers.component.html",
  styleUrls: ["./villagers.component.css"],
  providers: [VillagersServiceService],
})
export class VillagersComponent implements OnInit {
  public mainCharacter: Villager;

  constructor(public villagersService: VillagersServiceService) {
    this.mainCharacter = {
      id: 13,
      name: "BJ",
      personality: "Sleepy",
      birthday: new Date(1995, 9, 16),
      gender: "Male",
      "catch-phrase": "Can you share your screen?",
      image_uri: "https://acnhapi.com/v1/images/villagers/12",
      showMoreInfo: true,
      "bubble-color": "#66305D",
      "text-color": "#F1F7F8",
    };
  }

  delete(event) {
    const id = event;

    // find the index of the item delete
    const deleteIndex = this.villagersService.villagers.findIndex(function (villager) {
      return villager.id === id;
    });

    // delete from the array
    this.villagersService.villagers.splice(deleteIndex, 1);
  }

  toggleMoreInfo(villager) {
    villager.showMoreInfo = !villager.showMoreInfo;
  }

  ngOnInit() {
    this.villagersService.getVillagers();
  }
}
