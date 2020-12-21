export interface IAction {
    action: TAction;
}

export interface ICompletedStepsData {
    step_1: IGroomBridgeAccountData;
}

export interface IGroomBridgeAccountData {
    groomBride: {
        email: string
        name: string
    };
    groomInfo: {
        groomFirstName: string;
        groomMiddleName: string;
        groomLastName: string;
        groomBirth: string;
        groomPhoneNumber: string;
        groomGender: string;
    };
    brideInfo: {
        brideFirstName: string;
        brideMiddleName: string;
        brideLastName: string;
        bridebirth: string;
        bridePhoneNumber: string;
        brideGender: string;
    };
}

export type TAction = 'prev' | 'next';
