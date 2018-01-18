import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrgnizationPage } from '../orgnization/orgnization';
import { LoginPage } from '../login/login';
import { OrgMenuPage } from '../org-menu/org-menu';
import { MapPage } from '../map/map';
import { HomePage } from '../home/home';
import { RecipientPage } from '../recipient/recipient';
import { AddInformationPage } from '../add-information/add-information';
import { SearchPage } from '../search/search';
import { FoodRequestPage } from '../food-request/food-request';
import { FoodAvaliabiltyPage } from '../food-avaliabilty/food-avaliabilty';
import { StatisticPage } from '../statistic/statistic';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public navCtrl: NavController) {
  }
  goToRegister(params){
    if (!params) params = {};
    this.navCtrl.push(RegisterPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToMap(params){
    if (!params) params = {};
    this.navCtrl.push(MapPage);
  }goToRecipient(params){
    if (!params) params = {};
    this.navCtrl.push(RecipientPage);
  }goToAddInformation(params){
    if (!params) params = {};
    this.navCtrl.push(AddInformationPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }goToOrgnization(params){
    if (!params) params = {};
    this.navCtrl.push(OrgnizationPage);
  }goToSearch(params){
    if (!params) params = {};
    this.navCtrl.push(SearchPage);
  }goToFoodRequest(params){
    if (!params) params = {};
    this.navCtrl.push(FoodRequestPage);
  }goToFoodAvaliabilty(params){
    if (!params) params = {};
    this.navCtrl.push(FoodAvaliabiltyPage);
  }goToOrgMenu(params){
    if (!params) params = {};
    this.navCtrl.push(OrgMenuPage);
  }goToStatistic(params){
    if (!params) params = {};
    this.navCtrl.push(StatisticPage);
  }
}
