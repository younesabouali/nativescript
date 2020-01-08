import { Component, OnInit } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";

@Component({
    selector: "ns-day-modal",
    templateUrl: "./day-modal.component.html",
    styleUrls: ["./day-modal.component.css"]
})
export class DayModalComponent implements OnInit {
    loadedDate: Date;

    constructor(private modalDialog: ModalDialogParams) {}

    ngOnInit() {
        this.loadedDate = (this.modalDialog.context as { date: Date }).date;
    }
    handleTap(action: string) {
        this.modalDialog.closeCallback(action);
    }
}
