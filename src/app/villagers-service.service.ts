import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

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

@Injectable({
  providedIn: "root",
})
export class VillagersServiceService {
  public villagers: Villager[];

  constructor(private http: HttpClient) {
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

  getVillagers(): void {
    // Make an API request to our Animal Crossings API
    // Set the response of that request to our this.villagers array
    const url = "http://acnhapi.com/v1/villagers/";

    this.http
      .get(url) // calling the API
      .subscribe(
        // subscribing to run our functions when the data returns
        (data) => {
          // this is what happens on success
          console.log(data);

          // convert object to an array
          for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
              const villager = data[key]; // individual villager

              // converting the format of the API to the format
              // that we are expecting in our Villager interface
              villager.name = villager.name["name-USen"];

              this.villagers.push(villager);
            }
          }
        },
        (error) => {
          // this is what happens on failure
          console.error(error);
        }
      );
  }
}
