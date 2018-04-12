import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor() { }
    ngOnInit() {
        $(document).on("scroll", function () {
            if
        ($(document).scrollTop() > 1) {
                $(".global-header").addClass("shrink");
                $(".global-parent-container").css("cssText", "padding-top:100px");
            }
            else {
                $(".global-header").removeClass("shrink");
                $(".global-parent-container").css("cssText", "padding-top:0px");
            }
        });
    }
}