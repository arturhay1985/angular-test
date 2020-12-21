import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

import { INavbarItem } from '@models/index';
import { NavbarService } from '@services/index';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainNavbarComponent implements OnInit, OnDestroy {
  private _unsubscribe$: Subject<void> = new Subject<void>();
  public navbarItems: INavbarItem[] = [];

  constructor(private _navbarService: NavbarService) {
    this._handleNavbarItemsChange();
  }

  ngOnInit(): void { }

  private _handleNavbarItemsChange(): void {
    this._navbarService.getNavbarItems()
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe((items: INavbarItem[]) => {
        this.navbarItems = items;
      });
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }

}
