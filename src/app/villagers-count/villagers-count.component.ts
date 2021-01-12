import { Component, OnInit } from "@angular/core";
import { VillagersServiceService } from "../villagers-service.service";
@Component({
  selector: "app-villagers-count",
  templateUrl: "./villagers-count.component.html",
  styleUrls: ["./villagers-count.component.css"],
  providers: [VillagersServiceService],
})
export class VillagersCountComponent implements OnInit {
  constructor(public villagersService: VillagersServiceService) {}

  ngOnInit() {}
}
