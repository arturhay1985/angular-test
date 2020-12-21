import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { DigitOnlyDirective } from './directives';

@NgModule({
    declarations: [DigitOnlyDirective],    // TODO
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        DigitOnlyDirective
    ]
})

export class SharedModule {}
