import { Component, OnInit, Input } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page/page";

import { isAndroid } from "tns-core-modules/platform";
import { UIService } from "./../ui.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
// import { location } from './../../../../../platforms/android/app/build/intermediates/merged_assets/debug/out/app/vendor';

@Component({
    selector: "ns-action-bar",
    templateUrl: "./action-bar.component.html",
    styleUrls: ["./action-bar.component.css"]
})
export class ActionBarComponent implements OnInit {
    @Input("title") title: string;
    @Input() showBackButton = true;
    @Input() hasMenu = true;
    constructor(
        private router: RouterExtensions,
        private page: Page,
        private routeA: Router,
        private uiService: UIService,
        private activatedRoute: ActivatedRoute,
        private location: Location
    ) {}
    get android() {
        return isAndroid;
    }
    get canGoBack() {
        return this.router.canGoBack() && this.showBackButton;
    }
    onGoBack() {
        this.router.back({ relativeTo: this.activatedRoute });
    }
    onToggleMenu() {
        this.uiService.toggleDrawer();
    }
    ngOnInit() {}
}
