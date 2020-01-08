import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { DayModalComponent } from "./../day-modal/day-modal.component";
import { UIService } from "./../../shared/ui/ui.service";

@Component({
    selector: "ns-current-challenge",
    templateUrl: "./current-challenge.component.html",
    styleUrls: ["./current-challenge.component.css"],
    moduleId: module.id
})
export class CurrentChallengeComponent implements OnInit {
    status: string;
    constructor(
        private modalService: ModalDialogService,
        private vcRef: ViewContainerRef,
        private uiService: UIService
    ) {}
    async onChangeStatus() {
        const result = await this.modalService.showModal(DayModalComponent, {
            fullscreen: true,
            viewContainerRef: this.uiService.getRootVcRef() || this.vcRef,
            context: { date: new Date() } as { date: Date }
        });
        this.status = result;
    }
    async ngOnInit() {}
}
