import { Component, OnInit, OnDestroy, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { StepperService } from '../../services/stepper.service';

@Component({
    selector: 'app-step-progress',
    templateUrl: 'step-progress.component.html',
    styleUrls: ['step-progress.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class StepProgressComponent implements OnInit, AfterViewInit, OnDestroy {
    private _unsubscribe$: Subject<void> = new Subject<void>();
    @ViewChild('progressLine') private _progressLineElement: ElementRef;

    public activeStepNum: number;

    constructor(
        private _stepperService: StepperService
    ) { }

    ngOnInit(): void {
        this._handleActiveStepChanges();
    }

    ngAfterViewInit(): void {
        this._setProgressLineWidth();
    }

    private _handleActiveStepChanges(): void {
        this._stepperService.getActiveStep()
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((value) => {
                this.activeStepNum = value;
                if (this._progressLineElement) {
                    this._setProgressLineWidth();
                }
            });
    }

    private _setProgressLineWidth(): void {
        const width = (this.activeStepNum * 25);
        this._progressLineElement.nativeElement.style.width = `${width}%`;
    }

    ngOnDestroy(): void {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}
