import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { CurrentChallengeComponent } from "./challenges/currentChallenges/current-challenge.component";
import { AuthComponent } from "./auth/auth.component";
import { TodayComponent } from "./challenges/today/today.component";
import { ChallengeEditComponent } from "./challenges/challenge-edit/challenge-edit.component";
import { ChallengeTabsComponent } from "./challenges/challenge-tabs/challenge-tabs.component";
import { Routes } from "@angular/router";
const routes: Routes = [
    { path: "", component: AuthComponent },
    {
        path: "challenges",
        children: [
            {
                path: "tabs",
                component: ChallengeTabsComponent,
                children: [
                    {
                        path: "today",
                        component: TodayComponent,
                        outlet: "today"
                    },
                    {
                        path: "current-challenge",
                        component: CurrentChallengeComponent,
                        outlet: "currentChallenge"
                    }
                ]
            },
            {
                path: ":mode",
                component: ChallengeEditComponent
                // outlet: "currentChallenge"
            },
            { path: "", redirectTo: "/challenges/tabs", pathMatch: "full" }
        ]
    }
];
@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
