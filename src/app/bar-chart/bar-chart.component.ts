import { ChartService } from './../chart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,

  };
  public barChartLabels: string[] = ['Repo A', 'Repo B', 'Repo C', 'Repo D', 'Repo E', 'Repo F', 'Repo G'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  public barChartData3: string[]= [];
  public barChartValues: any[]= [];

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 54, 60, 80, 65], label: 'Commits' },
  ];

  public loading = true;

  public barChartData2: any[];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize(): void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }



  ngOnInit() {
    this.chartService.getBarChartData()
      .subscribe(response => {
        this.barChartData2 = response.json();
        // console.log(response);
        console.log("Dynamic Data from DB");
        console.log(this.barChartData2);

        for( let key in this.barChartData2) {
          let value = this.barChartData2[key];
          this.barChartData3.push(value.repo_name);
          this.barChartValues.push(value.no_of_commits);
        }
        this.barChartLabels = this.barChartData3;
        this.barChartData[0].data = this.barChartValues;
        console.log(this.barChartData);
        this.loading = false;
      });

      
  }

  constructor(private chartService: ChartService) { }



}
