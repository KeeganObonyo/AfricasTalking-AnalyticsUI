import { AppConst } from './constants/app-const';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class ChartService {

  private url = AppConst.serverPath;
  

  getBarChartData() {
    return this.http.get(this.url);
  }

  constructor(private http: Http) { }
}
