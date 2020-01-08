import {
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
    AfterViewInit,
    ChangeDetectorRef,
    ViewContainerRef
} from "@angular/core";
import { UIService } from "./shared/ui/ui.service";
import { Subscription } from "rxjs";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild(RadSideDrawerComponent, { static: false })
    drawerComponent: RadSideDrawerComponent;
    drawerSub: Subscription;
    constructor(
        private uiService: UIService,
        private changeDetectionRef: ChangeDetectorRef,
        private vcRef: ViewContainerRef
    ) {}
    ngOnInit() {
        this.uiService.setRootVcRef(this.vcRef);
    }
    ngAfterViewInit() {
        this.drawerSub = this.uiService.drawerState.subscribe(() => {
            this.drawerComponent.sideDrawer.toggleDrawerState();
        });

        this.changeDetectionRef.detectChanges();
    }
    onLogout() {
        this.uiService.toggleDrawer();
    }
    ngOnDestroy() {
        if (this.drawerSub) {
            this.drawerSub.unsubscribe();
        }
    }
}
