import { PieChartComponent } from './pie-chart/pie-chart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';

const routes: Routes = [
    {
        path: 'piechart',
        component: PieChartComponent
    },
    {
        path: 'barchart',
        component: BarChartComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }