import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';


import { AppGlobalApiService } from '../app/app-global-api/app-global-api.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private globalDataService: AppGlobalApiService, router: Router) {
        globalDataService.lisOfHeroes
        //route change events
        router.events.forEach((event) => {
            if (event instanceof NavigationStart) {
                window.scroll(0, 0);
            }
            // NavigationEnd
            // NavigationCancel
            // NavigationError
            // RoutesRecognized
        });

    }

    ngOnInit() {

    }

}
