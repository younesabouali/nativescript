import { Injectable, ViewContainerRef } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: "root" })
export class UIService {
    _RootVCRef;
    private _drawerState = new BehaviorSubject<void>(null);
    get drawerState() {
        return this._drawerState.asObservable();
    }
    toggleDrawer() {
        this._drawerState.next();
    }
    setRootVcRef(VcRef: ViewContainerRef) {
        this._RootVCRef = VcRef;
    }
    getRootVcRef() {
        return this._RootVCRef;
    }
}
