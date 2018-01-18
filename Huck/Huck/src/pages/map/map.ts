import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
    selector: 'page-map',
    templateUrl: 'map.html'
})
export class MapPage {

    
    constructor() { }

    ionViewDidLoad() {
        this.initMap();
    }


    initMap() {
        var uluru = { lat: 36.072894, lng: -79.791333 };
        var fb1 = { lat: 36.068486, lng: -79.82734 };
        var fb2 = { lat: 36.084775, lng: -79.774071 };
        var fb3 = { lat: 36.056211, lng: -79.790859 };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: fb1
    }); var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: fb2
    }); var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: fb3
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    }); var marker = new google.maps.Marker({
        position: fb1,
        map: map
    }); var marker = new google.maps.Marker({
        position: fb2,
        map: map
    }); var marker = new google.maps.Marker({
        position: fb3,
        map: map
    });
   }


} 


