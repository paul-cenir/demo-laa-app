import { Directive, Input, ElementRef } from '@angular/core';
declare var $: any;

@Directive({
    selector: '[appCustomEllipsis]'
})
export class CustomEllipsisDirective {
    @Input() ellipsisLine: number;

    constructor(public el: ElementRef) {
        //https://www.jqueryscript.net/text/Truncating-Text-By-Lines-jQuery-ellipsis.html
        setTimeout(() => {
            $(el.nativeElement).ellipsis({
                responsive: true,
                lines: this.ellipsisLine,
            });
        }, 50);

    }

    ngOnInit() {
        // $(this.el.nativeElement).ellipsis({
        //     responsive: true,
        //     lines: this.ellipsisLine,
        // });

    }
}
