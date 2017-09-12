import {Injectable} from '@angular/core';
import {Alert, NavController} from 'ionic-angular';


@Injectable()
export class NetworkService {
    constructor(public nav: NavController) {
    }
}