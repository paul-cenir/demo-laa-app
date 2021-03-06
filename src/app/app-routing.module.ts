import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, RouterLinkActive } from '@angular/router';

import { HomePageComponent } from './modules/pages/home-page/home-page.component';
import { AboutComponent } from './modules/pages/about/about.component';
import { CategoriesComponent } from './modules/pages/categories/categories.component';
import { MechanicsComponent } from './modules/pages/mechanics/mechanics.component';
import { FormsComponent } from './modules/pages/forms/forms.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'about', component: AboutComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'mechanics', component: MechanicsComponent },
    { path: 'forms', component: FormsComponent },



    // all other routes and finally at the last add
    { path: '**', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(
            routes,
            { enableTracing: false }
        )
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule { }
