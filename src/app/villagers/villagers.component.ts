import { Component, OnInit } from "@angular/core";

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
})
export class VillagersComponent implements OnInit {
  public villagers: Villager[];
  public mainCharacter : Villager;

  constructor() {
    this.mainCharacter = {
      id: 13,
      name: "BJ",
      personality: "Sleepy",
      birthday: new Date(1995, 9,16),
      gender: "Male",
      'catch-phrase': "Can you share your screen?",
      image_uri: "https://acnhapi.com/v1/images/villagers/12",
      showMoreInfo: true,
      "bubble-color": "#66305D",
      "text-color": "#F1F7F8",
    };

    this.villagers = [
      {
        id: 12,
        name: "Nate",
        personality: "Lazy",
        birthday: new Date(2020, 8, 16),
        gender: "Male",
        "catch-phrase": "yawwwn",
        image_uri: "https://acnhapi.com/v1/images/villagers/12",
        "bubble-color": "#e8b010",
        "text-color": "#fffce9",
        showMoreInfo: true,
      },
      {
        id: 200,
        name: "Bertha",
        personality: "Normal",
        birthday: new Date(2020, 4, 25),
        gender: "Female",
        "catch-phrase": "bloop",
        image_uri: "https://acnhapi.com/v1/images/villagers/200",
        "bubble-color": "#00d1bd",
        "text-color": "#fffce9",
        showMoreInfo: true,
      },
      {
        id: 20,
        name: "Beardo",
        personality: "Smug",
        birthday: new Date(2020, 12, 20),
        gender: "Male",
        "catch-phrase": "whiskers",
        image_uri: "https://acnhapi.com/v1/images/villagers/20",
        "bubble-color": "#3fd8e0",
        "text-color": "#fffce9",
        showMoreInfo: true,
      },
    ];
  }

  delete(event) {
    const id = event;

    // find the index of the item delete
    const deleteIndex = this.villagers.findIndex(function (villager) {
      return villager.id === id;
    });

    // delete from the array
    this.villagers.splice(deleteIndex, 1);
  }

  toggleMoreInfo(villager) {
    villager.showMoreInfo = !villager.showMoreInfo;
  }

  ngOnInit() {}
}
