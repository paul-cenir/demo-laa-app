import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    showBox: boolean = false;
    constructor() { }

    clickShowHideBox() {
        if (this.showBox) {
            this.showBox = false;
        } else {
            this.showBox = true;
        }


        window.scrollTo(0, document.body.scrollHeight);
        setTimeout(function () {
            $('html,body').animate({ scrollTop: document.body.scrollHeight });
        }, 0);
    }


    ngOnInit() {


    }

}
