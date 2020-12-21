import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { IAction } from '@models/index';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { StepperService } from '../../services/stepper.service';

@Component({
  selector: 'app-event-description',
  templateUrl: './event-description.component.html',
  styleUrls: ['./event-description.component.scss']
})
export class EventDescriptionComponent implements OnInit, OnDestroy {
  private _unsubscribe$: Subject<void> = new Subject<void>();
  public eventDescriptionForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _stepperService: StepperService
  ) { }

  ngOnInit(): void {
    this._createEventDescriptionForm();
    this._handleActionEvent();

  }

  private _createEventDescriptionForm(): void {
    this.eventDescriptionForm = this._fb.group({
      gender: new FormControl(null, [Validators.required]),
      hotel: new FormControl(null, [Validators.required]),
      checkInDate: new FormControl(null, [Validators.required]),
      checkOutDate: new FormControl(null, [Validators.required]),
      honeymoon: new FormControl(null),
      bookedRoom: new FormControl(null),
      roomNumber: new FormControl(null, [Validators.required])
    });
    this._setSelectedValues();
  }

  private _handleActionEvent(): void {
    this._stepperService.getAction()
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe((state: IAction) => {
        switch (state.action) {
          case 'prev': {
            // TODO PAHEL ARTEN LRACVAC ARJEQNERE;
            this._stepperService.setActiveStep(1);
            break;
          }
          case 'next': {
            if (this.eventDescriptionForm.invalid) {
              this.eventDescriptionForm.markAllAsTouched();
              return;
            }
            const completedData = this.eventDescriptionForm.value;
            this._stepperService.setStepCompletedData(2, completedData);
            this._stepperService.setActiveStep(3);
            break;
          }
        }
      });
  }

  private _setSelectedValues(): void {
    const completedData = this._stepperService.getStepCompletedData(2);
    if (completedData) {
      this.eventDescriptionForm.setValue(completedData);
    }
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
}
