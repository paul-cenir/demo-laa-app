import { Directive, ElementRef } from '@angular/core';
declare var $: any;
@Directive({
    selector: '[appCustomEllipsis]'
})
export class CustomEllipsisDirective {

    constructor(el: ElementRef) {
        console.log(el.nativeElement);
        // el.nativeElement.style.backgroundColor = 'yellow';

        //https://www.jqueryscript.net/text/Truncating-Text-By-Lines-jQuery-ellipsis.html
        // $('.overflow').ellipsis({
        //     responsive: true,
        //     lines: 3,
        // });
    }

    ngOnInit() {

    }


}
