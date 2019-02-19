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
            if (this.start_time < 23 && this.end_time < 23) {
                this.total_charge = (total_time * 15)
            }
            if (this.start_time < 23 && this.end_time >= 23) {
                let first_segment = 23 - this.start_time
                let second_segment = this.end_time - 23
                this.total_charge = (first_segment * 15) + (second_segment * 20)
            }
            else if (this.start_time >= 23) {
                this.total_charge = total_time * 20;
            }
        }
        if (info.value.family === 'family-c') {
            if (this.start_time < 21 && this.end_time < 21) {
                this.total_charge = (total_time * 21)
            }
            if (this.start_time < 21 && this.end_time >= 21) {
                let first_segment = 21 - this.start_time
                let second_segment = this.end_time - 21
                this.total_charge = (first_segment * 21) + (second_segment * 15)
            }
            else if (this.start_time >= 21) {
                this.total_charge = total_time * 15;
            }
        }
        if (info.value.family === 'family-b') {
            if (this.start_time < 22 && this.end_time < 22) {
                this.total_charge = (total_time * 12)
            }
            if (this.start_time < 22 && this.end_time >= 22 && this.end_time <= 24) {
                let first_segment = 22 - this.start_time
                let second_segment = this.end_time - 22
                this.total_charge = (first_segment * 12) + (second_segment * 8)
            }
            if (this.start_time < 22 && this.end_time > 24) {
                let first_segment = 22 - this.start_time
                let second_segment = 2
                let third_segment = this.end_time - 24
                this.total_charge = (first_segment * 12) + (second_segment * 8) + (third_segment * 16)
            }
            if (this.start_time >= 22 && this.end_time >= 22 && this.end_time <= 24) {
                let second_segment = this.end_time - 22
                this.total_charge = (second_segment * 8)
            }
            if (this.start_time >= 22 && this.end_time > 24) {
                let second_segment = 2
                let third_segment = this.end_time - 24
                this.total_charge = (second_segment * 8) + (third_segment * 12)
            }
            else if (this.start_time >= 24) {
                this.total_charge = total_time * 16;
            }
        }
    }

}


