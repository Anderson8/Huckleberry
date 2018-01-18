import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrgMenuPage } from '../org-menu/org-menu';
import { MapPage } from '../map/map';
import { HomePage } from '../home/home';
import { RecipientPage } from '../recipient/recipient';
import { AddInformationPage } from '../add-information/add-information';
import { OrgnizationPage } from '../orgnization/orgnization';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { SearchPage } from '../search/search';
import { FoodAvaliabiltyPage } from '../food-avaliabilty/food-avaliabilty';
import { StatisticPage } from '../statistic/statistic';

@Component({
  selector: 'page-food-request',
  templateUrl: 'food-request.html'
})
export class FoodRequestPage {

  constructor(public navCtrl: NavController) {
  }
  goToOrgMenu(params){
    if (!params) params = {};
    this.navCtrl.push(OrgMenuPage);
  }goToRecipient(params){
    if (!params) params = {};
    this.navCtrl.push(RecipientPage);
  }goToAddInformation(params){
    if (!params) params = {};
    this.navCtrl.push(AddInformationPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }goToMap(params){
    if (!params) params = {};
    this.navCtrl.push(MapPage);
  }goToRegister(params){
    if (!params) params = {};
    this.navCtrl.push(RegisterPage);
  }goToOrgnization(params){
    if (!params) params = {};
    this.navCtrl.push(OrgnizationPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToSearch(params){
    if (!params) params = {};
    this.navCtrl.push(SearchPage);
  }goToFoodRequest(params){
    if (!params) params = {};
    this.navCtrl.push(FoodRequestPage);
  }goToFoodAvaliabilty(params){
    if (!params) params = {};
    this.navCtrl.push(FoodAvaliabiltyPage);
  }goToStatistic(params){
    if (!params) params = {};
    this.navCtrl.push(StatisticPage);
  }
}
