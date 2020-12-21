import { Injectable } from '@angular/core';

import { INavbarItem } from '@models/index';

import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class NavbarService {
    private _navbarItems: INavbarItem[] = [];
    private _navbarItemsEvent$: BehaviorSubject<INavbarItem[]> = new BehaviorSubject<INavbarItem[]>(null);

    constructor() { }

    public setNavbarItems(navbarItems: INavbarItem[]): void {
        this._navbarItems = navbarItems;
        this._navbarItemsEvent$.next(this._navbarItems);
    }

    public getNavbarItems(): Observable<INavbarItem[]> {
        return this._navbarItemsEvent$
            .asObservable()
            .pipe(filter((e) => e != null));
    }

    public getNavbarItemsSync(): INavbarItem[] {
        return this._navbarItems;
    }

    public clearNavbarItems(): void {
        this.setNavbarItems([]);
    }

}
