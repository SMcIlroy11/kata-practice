import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface Family {
    value: string;
    viewValue: string;
}

export interface Start {
    value: number;
    viewValue: string;
}

export interface End {
    value: number;
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
    starts: Start[] = [
        { value: 17, viewValue: '5 PM' },
        { value: 18, viewValue: '6 PM' },
        { value: 19, viewValue: '7 PM' },
        { value: 20, viewValue: '8 PM' },
        { value: 21, viewValue: '9 PM' },
        { value: 22, viewValue: '10 PM' },
        { value: 23, viewValue: '11 PM' },
        { value: 24, viewValue: '12 PM' },
        { value: 1, viewValue: '1 AM' },
        { value: 2, viewValue: '2 AM' },
        { value: 3, viewValue: '3 AM' }
    ];
    ends: End[] = [
        { value: 18, viewValue: '6 PM' },
        { value: 19, viewValue: '7 PM' },
        { value: 20, viewValue: '8 PM' },
        { value: 21, viewValue: '9 PM' },
        { value: 22, viewValue: '10 PM' },
        { value: 23, viewValue: '11 PM' },
        { value: 24, viewValue: '12 PM' },
        { value: 1, viewValue: '1 AM' },
        { value: 2, viewValue: '2 AM' },
        { value: 3, viewValue: '3 AM' },
        { value: 4, viewValue: '4 AM' }
    ];
    minDate = new Date(2019, 2, 18);
    maxDate = new Date(2020, 0, 1);



    constructor() { }

    ngOnInit() { }

    calculate(info) {
        console.log(info)
        console.log(info.value.start)
    }

}