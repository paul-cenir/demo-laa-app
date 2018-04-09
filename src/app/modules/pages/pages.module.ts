import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AboutComponent
        , HomePageComponent
    ]
})
export class PagesModule { }
