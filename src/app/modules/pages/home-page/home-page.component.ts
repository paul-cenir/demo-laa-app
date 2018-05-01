import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { AppGlobalApiService } from '../../../app-global-api/app-global-api.service';

declare var $: any;
@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    title: string = '';
    name: string = '';
    lisOfHeroes = [];
    constructor(private globalDataService: AppGlobalApiService) {
        globalDataService.globalData.name

    }

    ngOnInit() {
        this.name = this.globalDataService.globalData.name;
        this.title = this.globalDataService.globalData.title;
        this.lisOfHeroes = this.globalDataService.lisOfHeroes;
    }
}