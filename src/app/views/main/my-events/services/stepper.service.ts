import { Injectable } from '@angular/core';
import { IAction, ICompletedStepsData, IGroomBridgeAccountData, TAction } from '@models/index';

import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StepperService {
    private _activeStep: number = 1;
    private _activeStepEvent$: BehaviorSubject<number> = new BehaviorSubject<number>(this._activeStep);
    private _actionEvent$: Subject<IAction> = new Subject<IAction>();
    private _completedStepsData: ICompletedStepsData = {} as ICompletedStepsData;

    constructor() { }

    public setAction(type: TAction): void {
        this._actionEvent$.next({ action: type });
    }

    public getAction(): Observable<IAction> {
        return this._actionEvent$.asObservable();
    }

    public setActiveStep(step: number): void {
        this._activeStep = step;
        this._activeStepEvent$.next(step);
    }

    public getActiveStep(): Observable<number> {
        return this._activeStepEvent$.asObservable();
    }

    public getActiveStepSync(): number {
        return this._activeStep;
    }

    public setCompletedData(completedData: ICompletedStepsData): void {
        this._completedStepsData = completedData;
    }

    public setStepCompletedData(step: number, completedData): void {
        const key: string = `step_${step}`;
        this._completedStepsData[key] = completedData;
    }

    public getCompletedData(): ICompletedStepsData {
        return this._completedStepsData;
    }

    public getStepCompletedData(step: number): IGroomBridgeAccountData | any {
        const key: string = `step_${step}`;
        return this._completedStepsData[key];
    }

}
