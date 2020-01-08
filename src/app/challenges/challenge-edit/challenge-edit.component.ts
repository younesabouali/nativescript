import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";

@Component({
    selector: "ns-challenge-edit",
    templateUrl: "./challenge-edit.component.html",
    styleUrls: ["./challenge-edit.component.css"]
})
export class ChallengeEditComponent implements OnInit {
    isCreating: boolean;
    constructor(
        private page: PageRoute,
        private _routerExtensions: RouterExtensions,
        private _activateRoute: ActivatedRoute
    ) {}
    goBack() {
        if (this._routerExtensions.canGoBack) {
            this._routerExtensions.navigate(["challenges"]);
        }
    }
    ngOnInit() {
        this.page.activatedRoute
            .pipe(
                switchMap(activatedRoute => {
                    return activatedRoute.paramMap;
                })
            )
            .subscribe(
                paramMap => (this.isCreating = paramMap.get("mode") !== "edit")
            );
    }
}
