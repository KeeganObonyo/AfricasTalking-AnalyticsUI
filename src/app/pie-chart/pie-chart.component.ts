import { ChartService } from './../chart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  // Pie
  public pieChartData: number[] = [12, 34, 6, 7];
  public pieChartType: string = 'pie';

  public chartResponse: any[] = [];
  public chartLabels: string[] = [];
  public chartData: number[] = [];
  public pieChartColor: any = [
    {
      backgroundColor: [
        "#99c715",
        "#FFFF00",
        "#91ba94",
        "#00FF7F",
        "#2E8B57",
        "#6B8E23",
        "#808000",
        "#3CB371",
        "#00FF00",
        "#FFA500",
        "#CD853F",
        "#F4A460",
        "#A0522D",
        "#D2B48C",
        "#FFA07A",
        "#DAA520",
        "#FFD700",
        "#B8860B",
      ]
    }
  ]

  public loading = true;



  
  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.chartService.getPieChartData()
      .subscribe(response => {
        this.chartResponse = response.json();

        console.log(this.chartResponse);

        for (let key in this.chartResponse) {
          let value = this.chartResponse[key];
          this.chartLabels.push(value.language_name);
          this.chartData.push(value.percentage);

        }
        this.pieChartData = this.chartData;
        this.loading = false;

        console.log(this.pieChartData);

      })
  }



}