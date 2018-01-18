import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
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
  selector: 'page-orgnization',
  templateUrl: 'orgnization.html'
})
export class OrgnizationPage {

  constructor(public navCtrl: NavController) {
  }
  goToRegister(params){
    if (!params) params = {};
    this.navCtrl.push(RegisterPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToOrgMenu(params){
    if (!params) params = {};
    this.navCtrl.push(OrgMenuPage);
  }goToMap(params){
    if (!params) params = {};
    this.navCtrl.push(MapPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }goToRecipient(params){
    if (!params) params = {};
    this.navCtrl.push(RecipientPage);
  }goToAddInformation(params){
    if (!params) params = {};
    this.navCtrl.push(AddInformationPage);
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
  }goToStatistic(params){
    if (!params) params = {};
    this.navCtrl.push(StatisticPage);
  }
}
