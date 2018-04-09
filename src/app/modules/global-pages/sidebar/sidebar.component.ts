import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    showSidebar: boolean = false;
    constructor() { }

    openSidebar(content) {
        this.showSidebar = true;
    }
    closeSidebar(content) {
        this.showSidebar = false;

    }

    ngOnInit() {

    }

}
