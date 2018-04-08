import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Injectable()






export class AppGlobalApiService {
    apiRoot: string = "https://appfactorieapi-dev.azurewebsites.net/";
    constructor(private http: HttpClient) {
    }

    lisOfHeroes = [
        { id: 11, name: 'Mr. Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
    ];

    globalData = {
        'title': 'ABS-CBN'
        , 'name': 'LAA Project'
    };

    cars = [
        'ford', 'cheverlot', 'Buick'
    ];

    myData() {
        return 'My Reactive Form';
    }



    sampleHttpRequest() {
        let url = `${this.apiRoot}/api/Preview/GetAllUserAppInfo?userId=2651`;
        this.http.get(url).subscribe(
            data => {
                console.log(data);
            }, err => {
                console.log("Error occured.");
            }
        )

    }

    ngOnInit() {
        alert(234);

    }
}
