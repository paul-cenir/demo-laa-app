import { Component } from '@angular/core';



import { AppGlobalApiService } from '../app/app-global-api/app-global-api.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private globalDataService: AppGlobalApiService) {
        globalDataService.lisOfHeroes

    }

    ngOnInit() {

    }

}
