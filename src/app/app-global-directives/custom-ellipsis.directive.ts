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

        $(this.el.nativeElement).fewlines({

            // text for 'read less' link
            'closeMark': 'close',

            // text for 'read more' link
            'openMark': '',

            // display 'read more' and 'read less' links in a new line
            'newLine': false,

            // the number of lines
            'lines': this.ellipsisLine

        });



        // $(this.el.nativeElement).ellipsis({
        //     responsive: true,
        //     lines: this.ellipsisLine,
        // });

        // $(".ellip-parent .ellip").css("cssText", "padding:0 30px !important;")
    }
}
