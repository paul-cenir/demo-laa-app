import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './modules/global-pages/header/header.component';
import { FooterComponent } from './modules/global-pages/footer/footer.component';
import { HomePageComponent } from './modules/pages/home-page/home-page.component';
import { FormsComponent } from './modules/pages/forms/forms.component';
import { AppGlobalApiService } from './app-global-api/app-global-api.service'
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppGlobalControllerService } from './app-global-controller/app-global-controller.service';




@NgModule({
    declarations: [
        HeaderComponent
        , FooterComponent
        , AppComponent
        , HomePageComponent
        , FormsComponent
    ],
    imports: [
        BrowserModule
        , AppRoutingModule
        , ReactiveFormsModule
        , HttpClientModule
        , NgbModule.forRoot()
    ],
    providers: [
        AppGlobalApiService
        , AppGlobalControllerService
        , { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {


}
