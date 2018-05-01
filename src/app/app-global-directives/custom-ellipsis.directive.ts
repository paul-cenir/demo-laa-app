import { Directive, Input, ElementRef } from '@angular/core';
declare var $: any;

@Directive({
    selector: '[appCustomEllipsis]'
})
export class CustomEllipsisDirective {
    @Input() ellipsisLine: number;

    constructor(public el: ElementRef) {
        //https://www.jqueryscript.net/text/Truncating-Text-By-Lines-jQuery-ellipsis.html


    }

    ngOnInit() {
        $(this.el.nativeElement).ellipsis({
            responsive: true,
            lines: this.ellipsisLine,
        });

        $(".ellip-parent .ellip").css("cssText", "padding:0 30px !important;")
    }
}
