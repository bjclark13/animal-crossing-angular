import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

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
  selector: "app-villager-card",
  templateUrl: "./villager-card.component.html",
  styleUrls: ["./villager-card.component.css"],
})
export class VillagerCardComponent implements OnInit {
  @Input() villager: Villager;
  @Output() deleted = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}

  deleteVillager() {
    // fire an event to the parent,
    // telling it which villager was deleted
    this.deleted.emit(this.villager.id);
  }
}
