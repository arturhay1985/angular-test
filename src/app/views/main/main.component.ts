import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { NavbarService } from '@services/index';
import { DEFAULT_NAVBAR_ITEMS } from '@globals/navbar';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  constructor(
    private _navbarService: NavbarService,
  ) { }

  ngOnInit(): void {
    this._navbarService.setNavbarItems(DEFAULT_NAVBAR_ITEMS);
  }

}
