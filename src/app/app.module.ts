import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthComponent } from "./auth/auth.component";
import { ChallengeEditComponent } from "./challenges/challenge-edit/challenge-edit.component";
import { CurrentChallengeComponent } from "./challenges/currentChallenges/current-challenge.component";
import { TodayComponent } from "./challenges/today/today.component";
import { ActionBarComponent } from "./shared/ui/action-bar/action-bar.component";
import { ChallengeTabsComponent } from "./challenges/challenge-tabs/challenge-tabs.component";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { DayModalComponent } from "./challenges/day-modal/day-modal.component";
@NgModule({
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        AppRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent,
        CurrentChallengeComponent,
        ChallengeEditComponent,
        AuthComponent,
        TodayComponent,
        ActionBarComponent,
        ChallengeTabsComponent,
        DayModalComponent
    ],
    schemas: [NO_ERRORS_SCHEMA],
    entryComponents: [DayModalComponent]
})
export class AppModule {}
