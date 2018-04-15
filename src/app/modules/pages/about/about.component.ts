import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    activeStepsData: number = 2018;
    constructor() { }
    activeSteps(active) {
        this.activeStepsData = active;
    }
    ngOnInit() {
    }

}
