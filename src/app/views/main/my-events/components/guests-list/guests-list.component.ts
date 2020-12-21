import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailPattern } from '@globals/patterns';
import { IAction, IGuest } from '@models/index';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { StepperService } from '../../services/stepper.service';

@Component({
  selector: 'app-guests-list',
  templateUrl: './guests-list.component.html',
  styleUrls: ['./guests-list.component.scss']
})
export class GuestsListComponent implements OnInit, OnDestroy {
  public guests: IGuest[] = [];
  public guestsListForm: FormGroup;
  public guestsList: FormArray;
  private _unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private _fb: FormBuilder,
    private _stepperService: StepperService) { }

  ngOnInit(): void {
    this._createGuestsList();
    this._handleActionEvent();
  }

  private _createGuestsList(): void {
    this.guestsListForm = this._fb.group({
      guestFirstName: new FormControl(null, [Validators.required]),
      guestMiddleName: new FormControl(null, [Validators.required]),
      guestLastName: new FormControl(null, [Validators.required]),
      guestEmail: new FormControl(null, [Validators.required, Validators.pattern(emailPattern)]),
      guestPhoneNumber: new FormControl(null, [Validators.required]),
      guestGender: new FormControl(null, [Validators.required])
    });
    this._setSelectedValues();
  }

  private _handleActionEvent(): void {
    this._stepperService.getAction()
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe((state: IAction) => {
        switch (state.action) {
          case 'prev': {
            this._stepperService.setActiveStep(2);
            break;
          }
          case 'next': {
            const completedData = this.guests;
            this._stepperService.setStepCompletedData(3, completedData);
            this._stepperService.setActiveStep(4);
            break;
          }
        }
      });
  }
  private _setSelectedValues(): void {
    const completedData = this._stepperService.getStepCompletedData(3);
    if (completedData) {
      this.guests = completedData;
    }
  }

  public onClickAddList(): void {
    if (this.guestsListForm.invalid) {
      this.guestsListForm.markAllAsTouched();
      return;
    }
    this.guests.push(this.guestsListForm.value);
    this.guestsListForm.reset();
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }

}
