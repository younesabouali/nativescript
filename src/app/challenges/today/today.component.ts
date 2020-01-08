import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ns-today",
    templateUrl: "./today.component.html",
    styleUrls: ["./today.component.css"]
})
export class TodayComponent implements OnInit {
    todayDate;
    constructor() {}

    ngOnInit() {
        this.todayDate =
            new Date().getDate() +
            "/" +
            new Date().getMonth() +
            "/" +
            new Date().getFullYear();
    }
}
