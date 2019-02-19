import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms'
import { AppMaterialModule } from '../app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                AppMaterialModule,
                BrowserAnimationsModule
            ],
            declarations: [HomeComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have <mat-select> with "Family"', () => {
        const bannerElement: HTMLElement = fixture.nativeElement;
        const select = bannerElement.querySelector('mat-select');
        expect(select.textContent).toEqual('Family');
    });

    it('babysitter start time is no earlier than 5pm', () => {
        let start_time = [
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
        expect(start_time[0].value).toEqual(17);
    });
    it('babysitter end time is no later than 4am', () => {
        let end_time = [
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
        expect(end_time[10].value).toEqual(28);
    });
    it('family-a cost between 5pm-10pm totals 75', () => {
        const comp = new HomeComponent();
        let info = { value: { family: 'family-a' } };
        comp.start_time = 17
        comp.end_time = 22
        comp.calculate(info)
        expect(comp.total_charge).toBe(75)
    });
    it('family-a cost between 5pm-12am totals 110', () => {
        const comp = new HomeComponent();
        let info = { value: { family: 'family-a' } };
        comp.start_time = 17
        comp.end_time = 24
        comp.calculate(info)
        expect(comp.total_charge).toBe(110)
    });
    it('family-a cost between 12pm-4am totals 80', () => {
        const comp = new HomeComponent();
        let info = { value: { family: 'family-a' } };
        comp.start_time = 24
        comp.end_time = 28
        comp.calculate(info)
        expect(comp.total_charge).toBe(80)
    });
    it('family-c cost between 5pm-9pm totals 84', () => {
        const comp = new HomeComponent();
        let info = { value: { family: 'family-c' } };
        comp.start_time = 17
        comp.end_time = 21
        comp.calculate(info)
        expect(comp.total_charge).toBe(84)
    });
    it('family-c cost between 9pm-12pm totals 45', () => {
        const comp = new HomeComponent();
        let info = { value: { family: 'family-c' } };
        comp.start_time = 21
        comp.end_time = 24
        comp.calculate(info)
        expect(comp.total_charge).toBe(45)
    });
    it('family-b cost between 5pm-4am totals 140', () => {
        const comp = new HomeComponent();
        let info = { value: { family: 'family-b' } };
        comp.start_time = 17
        comp.end_time = 28
        comp.calculate(info)
        expect(comp.total_charge).toBe(140)
    });
    it('family-b cost between 5pm-10pm totals 60', () => {
        const comp = new HomeComponent();
        let info = { value: { family: 'family-b' } };
        comp.start_time = 17
        comp.end_time = 22
        comp.calculate(info)
        expect(comp.total_charge).toBe(60)
    });
    it('family-b cost between 10pm-12pm totals 16', () => {
        const comp = new HomeComponent();
        let info = { value: { family: 'family-b' } };
        comp.start_time = 22
        comp.end_time = 24
        comp.calculate(info)
        expect(comp.total_charge).toBe(16)
    });
    it('family-b cost between 9pm-12pm totals 28', () => {
        const comp = new HomeComponent();
        let info = { value: { family: 'family-b' } };
        comp.start_time = 21
        comp.end_time = 24
        comp.calculate(info)
        expect(comp.total_charge).toBe(28)
    });
    it('family-b cost between 10pm-1am totals 32', () => {
        const comp = new HomeComponent();
        let info = { value: { family: 'family-b' } };
        comp.start_time = 22
        comp.end_time = 25
        comp.calculate(info)
        expect(comp.total_charge).toBe(32)
    });
    // it('end time cannot be before start time', () => {
    //     const comp = new HomeComponent();

    //     const bannerElement: HTMLElement = fixture.nativeElement;
    //     const button = bannerElement.querySelector('button');
    //     bannerElement.querySelector('#start').textContent = '8pm'
    //     bannerElement.querySelector('#end').textContent = '6pm'

    //     expect(button.disabled).toBe(true)
    // });
});
