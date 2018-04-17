import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagesModule } from './modules/pages/pages.module';
import { GlobalPagesModule } from './modules/global-pages/global-pages.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './modules/global-pages/header/header.component';
import { SidebarComponent } from './modules/global-pages/sidebar/sidebar.component';
import { FooterComponent } from './modules/global-pages/footer/footer.component';
import { FormsComponent } from './modules/pages/forms/forms.component';
import { AppGlobalApiService } from './app-global-api/app-global-api.service'
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppGlobalControllerService } from './app-global-controller/app-global-controller.service';





@NgModule({
    declarations: [
        //start for refactor
        HeaderComponent
        , SidebarComponent
        , FooterComponent
        //end for refactor
        , AppComponent
        , FormsComponent
    ],
    imports: [
        BrowserModule
        , AppRoutingModule
        , ReactiveFormsModule
        , HttpClientModule
        , GlobalPagesModule
        , PagesModule
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
