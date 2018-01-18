import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RecipientPage } from '../pages/recipient/recipient';
import { MapPage } from '../pages/map/map';
import { AddInformationPage } from '../pages/add-information/add-information';
import { OrgnizationPage } from '../pages/orgnization/orgnization';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { OrgMenuPage } from '../pages/org-menu/org-menu';
import { SearchPage } from '../pages/search/search';
import { FoodRequestPage } from '../pages/food-request/food-request';
import { FoodAvaliabiltyPage } from '../pages/food-avaliabilty/food-avaliabilty';
import { StatisticPage } from '../pages/statistic/statistic';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RecipientPage,
    MapPage,
    AddInformationPage,
    OrgnizationPage,
    RegisterPage,
    LoginPage,
    OrgMenuPage,
    SearchPage,
    FoodRequestPage,
    FoodAvaliabiltyPage,
    StatisticPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RecipientPage,
    MapPage,
    AddInformationPage,
    OrgnizationPage,
    RegisterPage,
    LoginPage,
    OrgMenuPage,
    SearchPage,
    FoodRequestPage,
    FoodAvaliabiltyPage,
    StatisticPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}