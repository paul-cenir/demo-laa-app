import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CategoriesComponent } from './categories/categories.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MechanicsComponent } from './mechanics/mechanics.component';
import { CustomEllipsisDirective } from '../../app-global-directives/custom-ellipsis.directive';

@NgModule({
    imports: [
        CommonModule,
        NgbModule
    ],
    declarations: [
        AboutComponent
        , HomePageComponent
        , CategoriesComponent
        , MechanicsComponent
        , CustomEllipsisDirective
    ]
})
export class PagesModule { }
