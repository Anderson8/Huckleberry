import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddInformationPage } from '../add-information/add-information';
import { HomePage } from '../home/home';
import { OrgnizationPage } from '../orgnization/orgnization';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { OrgMenuPage } from '../org-menu/org-menu';
import { MapPage } from '../map/map';
import { SearchPage } from '../search/search';
import { FoodRequestPage } from '../food-request/food-request';
import { FoodAvaliabiltyPage } from '../food-avaliabilty/food-avaliabilty';
import { StatisticPage } from '../statistic/statistic';

@Component({
  selector: 'page-recipient',
  templateUrl: 'recipient.html'
})
export class RecipientPage {

  constructor(public navCtrl: NavController) {
  }
  goToAddInformation(params){
    if (!params) params = {};
    this.navCtrl.push(AddInformationPage);
  }goToRecipient(params){
    if (!params) params = {};
    this.navCtrl.push(RecipientPage);
  }goToRegister(params){
    if (!params) params = {};
    this.navCtrl.push(RegisterPage);
  }goToOrgnization(params){
    if (!params) params = {};
    this.navCtrl.push(OrgnizationPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToMap(params){
    if (!params) params = {};
    this.navCtrl.push(MapPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
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
