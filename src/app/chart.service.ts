import { AppConst } from './constants/app-const';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class ChartService {

  private url = AppConst.serverPath;
  

  getBarChartData() {
    return this.http.get(this.url+ 'bar/graph/');

  }

  getPieChartData() {
    return this.http.get(this.url + "pie/chart/");

  }
  constructor(private http: Http) { }
}
