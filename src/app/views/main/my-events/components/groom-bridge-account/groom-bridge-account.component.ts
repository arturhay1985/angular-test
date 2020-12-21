import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailPattern } from '@globals/patterns';
import { IAction } from '@models/index';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { StepperService } from '../../services/stepper.service';


@Component({
  selector: 'app-groom-bridge-account',
  templateUrl: './groom-bridge-account.component.html',
  styleUrls: ['./groom-bridge-account.component.scss']
})
export class GroomBridgeAccountComponent implements OnInit, OnDestroy {
  private _unsubscribe$: Subject<void> = new Subject<void>();
  public groomBrideGroupForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _stepperService: StepperService
  ) {
  }

  ngOnInit(): void {
    this._createGroomBrideForm();
    this._handleActionEvent();
  }

  private _createGroomBrideForm(): void {
    this.groomBrideGroupForm = this._fb.group({
      groomBride: this._fb.group({
        email: new FormControl(null, [Validators.required, Validators.pattern(emailPattern)]),
        name: new FormControl(null, [Validators.required])
      }),
      groomInfo: this._fb.group({
        groomFirstName: new FormControl(null, [Validators.required]),
        groomMiddleName: new FormControl(null, [Validators.required]),
        groomLastName: new FormControl(null, [Validators.required]),
        groomBirth: new FormControl(null, [Validators.required]),
        groomPhoneNumber: new FormControl(null, [Validators.required]),
        groomGender: new FormControl(null, [Validators.required])
      }),
      brideInfo: this._fb.group({
        brideFirstName: new FormControl(null, [Validators.required]),
        brideMiddleName: new FormControl(null, [Validators.required]),
        brideLastName: new FormControl(null, [Validators.required]),
        bridebirth: new FormControl(null, [Validators.required]),
        bridePhoneNumber: new FormControl(null, [Validators.required]),
        brideGender: new FormControl(null, [Validators.required])
      })
    });

    this._setSelectedValues();
  }


  private _setSelectedValues(): void {
    const completedData = this._stepperService.getStepCompletedData(1);
    if (completedData) {
      this.groomBrideGroupForm.setValue(completedData);
    }
  }

  private _handleActionEvent(): void {
    this._stepperService.getAction()
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe((state: IAction) => {
        switch (state.action) {
          case 'prev': {
            break;
          }
          case 'next': {
            if (this.groomBrideGroupForm.invalid) {
              this.groomBrideGroupForm.markAllAsTouched();
              return;
            }
            const completedData = this.groomBrideGroupForm.value;
            this._stepperService.setStepCompletedData(1, completedData);
            this._stepperService.setActiveStep(2);
            break;
          }
        }
      });
  }


  ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }

}

