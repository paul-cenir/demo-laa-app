import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appCustomEllipsis]'
})
export class CustomEllipsisDirective {

    constructor(el: ElementRef) {
        // el.nativeElement.style.backgroundColor = 'yellow';
    }

    ngOnInit() {

    }


}
