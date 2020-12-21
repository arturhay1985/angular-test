import { Component, OnDestroy, OnInit } from '@angular/core';
import { IAction } from '@models/index';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { StepperService } from '../../services/stepper.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit, OnDestroy {
  private _unsubscribe$: Subject<void> = new Subject<void>();
  public isShowCompletedModal: boolean = false;

  constructor(
    private _stepperService: StepperService
  ) {
    this._handleActionEvent();
  }

  ngOnInit(): void { }

  private _handleActionEvent(): void {
    this._stepperService.getAction()
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe((state: IAction) => {
        switch (state.action) {
          case 'prev': {
            this._stepperService.setActiveStep(3);
            break;
          }
          case 'next': {
            this.isShowCompletedModal = true;
            // COMPLETED DATA
            console.log(this._stepperService.getCompletedData());
            break;
          }
        }
      });
  }

  public onClickClose(): void {
    this.isShowCompletedModal = false;
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }

}
