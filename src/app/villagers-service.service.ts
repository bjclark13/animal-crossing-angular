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
  public url: string = "/api/villagers/";

  constructor(private http: HttpClient) {
    this.villagers = [];
  }

  addVillager(villager: any) {
    this.http.post(this.url, villager).subscribe((data) => {
      this.getVillagers();
    });
  }

  deleteVillager(id: number) {
    this.http.delete(this.url + id).subscribe((data) => {
      this.getVillagers();
    });
  }

  getVillagers(): void {
    this.villagers = [];
    // Make an API request to our Animal Crossings API
    // Set the response of that request to our this.villagers array
    this.http
      .get(this.url) // calling the API
      .subscribe(
        // subscribing to run our functions when the data returns
        (data) => {
          // this is what happens on success
          // convert object to an array
          for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
              const villager = data[key]; // individual villager

              // converting the format of the API to the format
              // that we are expecting in our Villager interface
              // villager.name = villager.name["name-USen"];

              this.villagers.push(villager);
              console.log(this.villagers);
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
