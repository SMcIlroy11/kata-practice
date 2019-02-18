import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface Family {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
    families: Family[] = [
        { value: 'family-A', viewValue: 'Family - A' },
        { value: 'family-B', viewValue: 'Family - B' },
        { value: 'family-C', viewValue: 'Family - C' }
    ];

    constructor() { }

    ngOnInit() { }

    calculate(info) {
        console.log(info)
    }

}