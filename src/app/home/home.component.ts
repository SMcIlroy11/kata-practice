import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface Family {
    value: string;
    viewValue: string;
    first_rate: number;
    second_rate: number;
    third_rate: number;
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
    start_time;
    end_time;
    total_charge;
    families: Family[] = [
        { value: 'family-a', viewValue: 'Family - A', first_rate: 15, second_rate: 20, third_rate: null },
        { value: 'family-b', viewValue: 'Family - B', first_rate: 12, second_rate: 8, third_rate: 16 },
        { value: 'family-c', viewValue: 'Family - C', first_rate: 21, second_rate: 15, third_rate: null }
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
        { value: 25, viewValue: '1 AM' },
        { value: 26, viewValue: '2 AM' },
        { value: 27, viewValue: '3 AM' }
    ];
    ends: End[] = [
        { value: 18, viewValue: '6 PM' },
        { value: 19, viewValue: '7 PM' },
        { value: 20, viewValue: '8 PM' },
        { value: 21, viewValue: '9 PM' },
        { value: 22, viewValue: '10 PM' },
        { value: 23, viewValue: '11 PM' },
        { value: 24, viewValue: '12 PM' },
        { value: 25, viewValue: '1 AM' },
        { value: 26, viewValue: '2 AM' },
        { value: 27, viewValue: '3 AM' },
        { value: 28, viewValue: '4 AM' }
    ];
    minDate = new Date(2019, 2, 18);
    maxDate = new Date(2020, 0, 1);



    constructor() { }

    ngOnInit() { }

    calculate(info) {
        const total_time = (this.end_time - this.start_time)
        if (info.value.family === 'family-a') {
            let first_segment = 23 - this.start_time
            if (this.end_time > 23) {
                let second_segment = this.end_time - 23
                let new_total = first_segment + second_segment
                this.total_charge = (15 * first_segment) + (20 * second_segment);
            }
            if (this.end_time <= 23) {
                let first_segment = this.end_time - this.start_time
                this.total_charge = (15 * first_segment)
            }
        }
    }

}


