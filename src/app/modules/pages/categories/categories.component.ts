import { Component, OnInit } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
declare var $: any;

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

    showAccordionActive: number = 1;

    constructor(config: NgbAccordionConfig) {
        // customize default values of accordions used by this component tree
        config.closeOthers = true;
        config.type = 'info';
    }

    showAccordion(active) {
        this.showAccordionActive = active;
    }

    ngOnInit() {




    }

}
