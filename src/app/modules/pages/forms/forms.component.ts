import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppGlobalApiService } from '../../../app-global-api/app-global-api.service'
import { AppGlobalControllerService } from '../../../app-global-controller/app-global-controller.service';


@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
    rForm: FormGroup;
    post: any;
    description: string = '';
    name: string = '';
    sampleGlobalText: string = '';
    titleAlert: string = 'This field is required';

    constructor(private fb: FormBuilder, private dataService: AppGlobalApiService, private globalValidation: AppGlobalControllerService) {
        this.rForm = fb.group(globalValidation.globalValidation);
    }

    addPost(post) {
        this.description = post.description;
        this.name = post.name;
    }
    ngOnInit() {
        console.log(this.dataService.sampleHttpRequest());
        this.sampleGlobalText = this.dataService.myData();
        this.rForm.get('validate').valueChanges.subscribe(
            (validate) => {
                if (validate == '1') {
                    this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
                    this.titleAlert = "You need to specify at least 3 characters";
                } else {
                    this.rForm.get('name').setValidators([Validators.required]);

                }
                this.rForm.get('name').updateValueAndValidity();
            }
        )
    }

}
