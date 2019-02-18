import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatSelectModule,
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatToolbarModule,
        MatSelectModule,
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatToolbarModule,
        MatSelectModule,
    ]
})
export class AppMaterialModule { }
