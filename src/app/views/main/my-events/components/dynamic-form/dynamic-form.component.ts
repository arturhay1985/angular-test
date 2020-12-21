import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { StepperService } from '../../services/stepper.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DynamicFormComponent implements OnInit, OnDestroy {
  private _unsubscribe$: Subject<void> = new Subject<void>();
  public activeStep: number;

  constructor(private _stepperService: StepperService) {
    this._handleActiveStepChanges();
  }

  ngOnInit(): void { }

  private _handleActiveStepChanges(): void {
    this._stepperService.getActiveStep()
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe((step: number) => {
        this.activeStep = step;
      });
  }

  public onClickPrev(): void {
    this._stepperService.setAction('prev');
  }

  public onClickNext(): void {
    this._stepperService.setAction('next');
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }

}
