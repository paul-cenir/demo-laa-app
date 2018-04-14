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
            $(".footer-modal").css("cssText", "position:static");
            $(".footer-style-1").css("cssText", "margin-top:none");
        } else {
            this.showBox = true;
            $(".footer-modal").css("cssText", "position:absolute;bottom:42px;width:100%;margin-top:40px");
            $(".footer-style-1").css("cssText", "margin-top:70px!important");
        }




    }


    ngOnInit() {


    }

}
